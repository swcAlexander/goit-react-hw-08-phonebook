import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from 'components/ContactForm/ContactForm.module.css';
import { addContact } from 'redux/operations';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '' || number.trim() === '') {
      toast.error('Please fill in all fields');
      return;
    }
    const isInContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isInContacts) {
      toast.error(`${name} is on contacts`);

      return;
    }

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.contactForm} onSubmit={handleSubmit}>
      <h1 className={style.contactFormHeader}>Phonebook</h1>
      <input
        className={style.contactInput}
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        className={style.contactInput}
        type="tel"
        name="number"
        value={number}
        onChange={handleChange}
        placeholder="Phone number"
      />
      <button className={style.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
