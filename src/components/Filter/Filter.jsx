import css from './Filter.module.css';
import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { getFilter } from '../../app/phonebookSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const formSubmit = e => {
    const filter = e.currentTarget.value;
    dispatch(getFilter(filter));
  };

  return (
    <form className={css.form}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={formSubmit}
      />
    </form>
  );
};

Filter.propTypes = {
  formSubmit: PropTypes.func,
  searchFromFilter: PropTypes.string,
};
