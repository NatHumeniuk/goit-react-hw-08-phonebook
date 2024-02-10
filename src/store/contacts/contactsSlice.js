import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'store/operations';

const initialState = {
  contacts: [],
  isLoading: false,
  isAdding: false,
  isDeleting: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, state => {
        state.isAdding = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isAdding = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isAdding = false;
        state.error = action.payload;
      })

      .addCase(deleteContact.pending, state => {
        state.isDeleting = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isDeleting = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.meta.arg
        );
      })

      .addCase(deleteContact.rejected, (state, action) => {
        state.isDeleting = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
