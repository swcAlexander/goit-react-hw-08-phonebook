import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/operations';
import styles from './Form.module.css';
import { selectUserToken } from 'redux/selectors';

export const LoginForm = () => {
  const isAuth = useSelector(selectUserToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(() => {
    isAuth && navigate('/');
  }, [isAuth]);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginThunk({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <form className={styles.reg_form} onSubmit={handleSubmit}>
      <div className={styles.reg_container}>
        <label htmlFor="exsampleInputEmail">Email address</label>
        <input
          type="text"
          name="email"
          typeof="email"
          placeholder="Please, input email"
          className={styles.reg_input}
          requered
          id="exsampleInputEmail"
        />
      </div>
      <div className={styles.reg_container}>
        <label htmlFor="exsampleInputPassword">Password</label>
        <input
          type="password"
          name="password"
          typeof="password"
          placeholder="Please, input password"
          className={styles.reg_input}
          requered
          minLength={7}
          id="exsampleInputPassword"
        />
      </div>
      <button type="submit" className={styles.reg_button}>
        Log in
      </button>
    </form>
  );
};
