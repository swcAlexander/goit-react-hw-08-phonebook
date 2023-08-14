import React from 'react';
import { registerThunk } from 'redux/operations';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserData } from 'redux/selectors';

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUserData);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registerThunk({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();

    user && navigate('/');
  };
  return (
    <form className={styles.reg_form} onSubmit={handleSubmit}>
      <div className={styles.reg_container}>
        <label htmlFor="exsampleInputName">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Please, input your name"
          className={styles.reg_input}
          requered
          minLength={2}
          id="exsampleInputName"
        />
      </div>
      <div className={styles.reg_container}>
        <label htmlFor="exsampleInputEmail">Email address</label>
        <input
          type="email"
          name="email"
          placeholder="Please, input email"
          className={styles.reg_input}
          id="exsampleInputEmail"
          requered
          aria-describedby="emailHelp"
        />
        <span id="emailHelp" className={styles.form_text}>
          We'll never share you email with anyone else
        </span>
      </div>

      <div className={styles.reg_container}>
        <label htmlFor="exsampleInputPassword">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Please, input password"
          className={styles.reg_input}
          requered
          minLength={7}
          id="exsampleInputPassword"
        />
      </div>
      <button type="submit" className={styles.reg_button}>
        Sign up
      </button>
    </form>
  );
};
