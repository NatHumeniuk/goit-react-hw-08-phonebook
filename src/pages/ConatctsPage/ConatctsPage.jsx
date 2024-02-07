import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { AddContactForm, ContactList, Filter } from 'components';
import {
  selectError,
  selectIsLoading,
} from 'store/contacts/contactSlise.selectors';
import { Loader } from 'components/Loader/Loader';

import css from './ContactsPage.module.css';

import { fetchContacts } from 'store/operations';

const ConatctsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      <div className={css.formWrap}>
        <h2 className={css.title}>Add contacts:</h2>
        <AddContactForm />
      </div>
      <div>
        <h2 className={css.contactsTitle}>My Contacts</h2>
        <Filter />
        {isLoading && <Loader />}
        {error && toast('Something went wrong.')}
        <ContactList />
      </div>
    </div>
  );
};
export default ConatctsPage;
