import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import style from 'components/Apx.module.css';
import { initialState } from 'redux/initialState';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const { contacts, isLoading } = initialState;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Loader />}
      {contacts.items.length > 0 ? (
        <Filter />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.items.length > 0 && <ContactList />}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default PhoneBook;
