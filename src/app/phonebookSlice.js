import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPhonebook,
  addContact,
  deleteContact,
  searchContact,
} from './operations';

const initialPhonebookState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: initialPhonebookState,
  reducers: {
    getFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchPhonebook.pending]: handlePending,
    [fetchPhonebook.rejected]: handleRejected,
    [fetchPhonebook.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(...action.payload);
    },
    [addContact.pending]: handlePending,
    [addContact.rejected]: handleRejected,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [deleteContact.pending]: handlePending,
    [deleteContact.rejected]: handleRejected,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.findIndex(
        ({ id }) => id === action.payload.id
      );
      state.contacts.splice(index, 1);
    },
    [searchContact.pending]: handlePending,
    [searchContact.rejected]: handleRejected,
    [searchContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(...action.payload);
    },
  },
});

export const { getFilter } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
