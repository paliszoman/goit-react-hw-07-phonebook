import css from './ContactList.module.css';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../app/selectors';
import { deleteContact } from '../../app/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.contact}>
          <strong>{name}:</strong> {phone}{' '}
          <button
            key={id}
            type="submit"
            onClick={() => {
              return dispatch(deleteContact(id));
            }}
          >
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  deleteMe: PropTypes.func,
};
