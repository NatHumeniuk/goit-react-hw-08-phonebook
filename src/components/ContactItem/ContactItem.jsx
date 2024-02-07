import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { MdFaceUnlock } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

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
          <div className={css.nameWrap}>
            <MdFaceUnlock className={css.iconPerson} />
            <p className={css.contact}>{contact.name}</p>
          </div>
          <div className={css.phoneWrap}>
            <FiPhoneCall className={css.iconPhone} />
            <a className={css.phoneNumber} href={`tel:${contact.number}`}>
              {contact.number}
            </a>
          </div>
          <button
            className={css.deleteBtn}
            onClick={() => handleDeleteContact(contact.id)}
            disabled={isLoading}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
