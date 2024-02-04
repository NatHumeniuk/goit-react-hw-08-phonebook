import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { deleteContact } from 'store/operations';
import {
  selectIsLoading,
  selectVisibleContacts,
} from 'store/contacts/contactSlise.selectors';

import css from '../ContactItem/ContactItem.module.css';

export const ContactItem = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(toast.success(`Contact was deleted!`));
  };

  return (
    <>
      {contacts?.map(contact => (
        <li key={contact.id} className={css.contactField}>
          <p className={css.contact}>
            {contact.name}:&nbsp;
            <span className={css.phoneNumber}>{contact.number}</span>
            <button
              className={css.addContactBtn}
              onClick={() => handleDeleteContact(contact.id)}
              disabled={isLoading}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </>
  );
};
