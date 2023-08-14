import PhoneBook from 'components/PhoneBook/PhoneBook';
import ScreenSaver from 'components/ScreenSaver/ScreenSaver';
import React from 'react';
import { authState } from 'redux/authReduser';

const Phonebook = () => {
  const { profile } = authState;

  return <div>{profile ? <PhoneBook /> : <ScreenSaver />}</div>;
};

export default Phonebook;
