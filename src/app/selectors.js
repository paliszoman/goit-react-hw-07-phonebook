import { createSelector } from '@reduxjs/toolkit';

export const selectPhonebook = state => state.phonebook.contacts;
export const selectFilter = state => state.phonebook.filter;
export const selectIsLoading = state => state.phonebook.isLoading;
export const selectErrorMessage = state => state.phonebook.errorMessage;

export const selectFilteredContacts = createSelector(
  [selectPhonebook, selectFilter],
  (contacts, filter) => {
    if (filter === '') return contacts;
    const filteredArray = contacts.filter(contact => {
      const filtered = filter.toLowerCase();
      return contact.name.toLowerCase().includes(filtered);
    });
    return filteredArray;
  }
);
