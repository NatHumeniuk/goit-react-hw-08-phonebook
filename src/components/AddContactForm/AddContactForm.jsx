import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'store/operations';
import {
  selectContacts,
  selectIsAdding,
} from 'store/contacts/contactSlise.selectors';

import css from '../AddContactForm/AddContactForm.module.css';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLAdding = useSelector(selectIsAdding);

  const handleFormSubmit = event => {
    event.preventDefault();

    const contactName = event.target.elements.contactName.value;
    const phoneNumber = event.target.elements.phoneNumber.value;

    const contactData = {
      name: contactName,
      number: phoneNumber,
    };

    const checkDuplicate = contactName => {
      return contacts.some(contact => contact.name === contactName);
    };
    if (!checkDuplicate(contactData.name)) {
      dispatch(addContact(contactData))
        .unwrap()
        .then(contactData => {
          toast.success(`${contactData.name} was successfully added!`);
        });
      event.target.reset();
    } else {
      toast.error(`${contactData.name} is already in contacts!`);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit} className={css.formContact}>
        <label className={css.formLabel}>
          Name:
          <input
            className={css.formInput}
            type="text"
            placeholder="John Smith"
            name="contactName"
            required
          />
        </label>
        <label className={css.formLabel}>
          Number:
          <input
            className={css.formInput}
            type="tel"
            name="phoneNumber"
            placeholder="548-48-48"
            pattern="\d{3}-\d{2}-\d{2}"
            required
          />
        </label>

        <button type="submit" className={css.submitBtn} disabled={isLAdding}>
          {isLAdding ? 'Adding...' : 'Add Contact'}
        </button>
      </form>
    </div>
  );
};
