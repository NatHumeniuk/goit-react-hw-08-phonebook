import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contacts/contactsSlice';
import { filtersReducer } from './contacts/filtersSlice';

export const store = configureStore({
  reducer: {
    contactsScope: contactsReducer,
    filtersScope: filtersReducer,
  },
});
