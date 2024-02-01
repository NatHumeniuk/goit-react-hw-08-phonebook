import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'store/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AddContactForm, ContactList, Filter } from 'components';

import css from './App.module.css';

import { fetchContacts } from 'store/operations';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className={css.mainTitle}>Phonebook</h1>
      <AddContactForm />
      <h2 className={css.contactsTitle}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </div>
  );
};
