import React from 'react';
import style from 'components/ScreenSaver/ScreenSaver.module.css';

const ScreenSaver = () => {
  return (
    <>
      <h1 className={style.title}>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <div className={style.main_container}>
        <p>Please register or log in</p>
      </div>
    </>
  );
};

export default ScreenSaver;
