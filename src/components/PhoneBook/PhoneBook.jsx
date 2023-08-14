import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    </div>
  );
};

export default PhoneBook;
