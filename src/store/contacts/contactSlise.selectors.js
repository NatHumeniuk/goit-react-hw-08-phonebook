import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contactsScope.contacts;

export const selectIsLoading = state => state.contactsScope.isLoading;
export const selectIsAdding = state => state.contactsScope.isAdding;
export const selectIsDeleting = state => state.contactsScope.iisDeleting;

export const selectError = state => state.contactsScope.error;

export const selectFilter = state => state.filtersScope.filter;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
