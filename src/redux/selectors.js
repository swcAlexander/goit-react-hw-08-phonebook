import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
export const selectLoading = state => state.isLoading;
export const selectUserLoading = state => state.auth.loading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;
export const selectUserData = state => state.auth.profile;

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
