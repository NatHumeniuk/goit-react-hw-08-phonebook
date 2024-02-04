import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'store/operations';
import {
  selectContacts,
  selectIsLoading,
} from 'store/contacts/contactSlise.selectors';

import css from '../AddContactForm/AddContactForm.module.css';

export const AddContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

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
    <form onSubmit={handleFormSubmit} className={css.formContact}>
      <label className={css.formLabel}>
        <span className={css.inputTitle}>Name:</span>
        <input
          className={css.formInput}
          type="text"
          placeholder="John Smith"
          name="contactName"
          required
        />
      </label>
      <label className={css.formLabel}>
        <span className={css.inputTitle}>Number:</span>
        <input
          className={css.formInput}
          type="tel"
          name="phoneNumber"
          placeholder="548-48-48"
          pattern="\d{3}-\d{2}-\d{2}"
          required
        />
      </label>

      <button type="submit" className={css.submitBtn} disabled={isLoading}>
        {isLoading ? 'Adding...' : 'Add Contact'}
      </button>
    </form>
  );
};
