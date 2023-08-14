import PhoneBook from 'components/PhoneBook/PhoneBook';
import ScreenSaver from 'components/ScreenSaver/ScreenSaver';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

const Contacts = () => {
  const profile = useSelector(selectUserData);

  return <div>{profile ? <PhoneBook /> : <ScreenSaver />}</div>;
};

export default Contacts;
