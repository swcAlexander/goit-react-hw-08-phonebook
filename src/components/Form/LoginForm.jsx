import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/authReduser';
import styles from './Form.module.css';

export const LoginForm = () => {
  const isAuth = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  dispatch(() => {
    isAuth && navigate('/');
  }, [isAuth]);
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(user));
  };
  return (

      <form className={styles.reg_form} onSubmit={handleSubmit}>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputEmail">Email address</label>
          <input
            type="text"
            name="email"
            typeof="email"
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