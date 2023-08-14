import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/authReduser';
import { Container } from 'components/Container/Container';
import styles from './RegisterPage.module.css';

const Login = () => {
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
    <Container>
      <h1 className={styles.reg_main_text}>Login</h1>
      <form className={styles.reg_form} onSubmit={handleSubmit}>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputEmail">Email address</label>
          <input
            type="text"
            name="email"
            typeof="email"
            className={styles.reg_input}
            id="exsampleInputEmail"
          />
        </div>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputPassword">Password</label>
          <input
            type="text"
            name="password"
            typeof="password"
            className={styles.reg_input}
            id="exsampleInputPassword"
          />
        </div>
        <button type="submit" className={styles.reg_button}>
          Submit
        </button>
      </form>
    </Container>
  );
};

export default Login;
