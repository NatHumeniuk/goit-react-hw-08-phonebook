import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AddContactForm, ContactList, Filter } from 'components';
import {
  selectError,
  selectIsLoading,
} from 'store/contacts/contactSlise.selectors';
import { Loader } from 'components/Loader/Loader';

import css from '../components/App.module.css';

import { fetchContacts } from 'store/operations';

const ConatctsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={css.mainTitle}>Phonebook</h1>
      <AddContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      {isLoading && <Loader />}
      {error && toast('Something went wrong.')}
      <ContactList />
    </div>
  );
};
export default ConatctsPage;
