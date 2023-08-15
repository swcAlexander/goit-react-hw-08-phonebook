import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteContact, fetchContacts, addContact } from './operations';

export const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchContacts.fulfilled, (state, action) => {
         state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          contact => contact.id !== action.payload
        );
      })
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected);
  },
});


const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.items = [];
};

const getActions = type =>
  [fetchContacts, addContact, deleteContact].map(action => action[type]);

export const { setFilter } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
