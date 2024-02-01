import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from '../ContactItem/ContactItem.module.css';
import { deleteContact } from 'store/operations';
import { selectVisibleContacts } from 'store/selectors';
import { toast } from 'react-toastify';

export const ContactItem = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteContact = contactId => {
    setIsDeleting(true);

    dispatch(deleteContact(contactId))
      .then(() => {})
      .catch(error => {
        toast.error(`Error: ${error.message}`);
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <>
      {contacts?.map(contact => (
        <li key={contact.id} className={css.contactField}>
          <p className={css.contact}>
            {contact.name}:&nbsp;
            <span className={css.phoneNumber}>{contact.phone}</span>
            <button
              className={css.addContactBtn}
              onClick={() => handleDeleteContact(contact.id)}
              disabled={isDeleting}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </>
  );
};
