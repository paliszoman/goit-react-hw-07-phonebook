import React, { useEffect } from 'react';

import { Form } from './Form/Form.jsx';
import { Filter } from './Filter/Filter.jsx';
import { ContactList } from './ContactList/ContactList.jsx';
import { useDispatch } from 'react-redux';
import { fetchPhonebook } from '../app/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhonebook());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
