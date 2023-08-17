import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectUserLoading = state => state.auth.loading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;
export const selectUserData = state => state.auth.profile;
export const selectAuthorization = state => state.auth.isAuth;

export const filteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
