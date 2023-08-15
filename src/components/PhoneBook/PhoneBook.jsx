import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import { selectContacts, selectLoading, selectUserToken } from 'redux/selectors';
import style from 'components/Apx.module.css';

const PhoneBook = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const token = useSelector(selectUserToken);

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  return (
    <div className={style.container}>
      <ContactForm />
      <h2>Contacts</h2>
      {isLoading && <Loader />}
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <p>Your phonebook is empty. Add first contact!</p>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default PhoneBook;
