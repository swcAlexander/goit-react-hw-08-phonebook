import React from 'react';
import { toast } from 'react-toastify';
import { signUp } from 'servises/authorization';
import { Container } from 'components/Container/Container';
import { useNavigate } from 'react-router-dom';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    signUp(newUser)
      .then(() => {
        toast.success('Created');
        navigate('/pages/Login');
      })
      .catch(error => toast.error(error.message));
    // signUp(newUser).then((responce) => console.log(responce.data) )
  };
  return (
    <Container>
      <h1 className={styles.reg_main_text}>Sign Up</h1>
      <form className={styles.reg_form} onSubmit={handleSubmit}>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputName">Name</label>
          <input
            type="text"
            name="name"
            typeof="name"
            className={styles.reg_input}
            id="exsampleInputName"
          />
        </div>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputEmail">Email address</label>
          <input
            type="text"
            name="email"
            typeof="email"
            className={styles.reg_input}
            id="exsampleInputEmail"
            aria-describedby="emailHelp"
          />
          <span id="emailHelp" className={styles.form_text}>
            We'll never share you email with anyone else
          </span>
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

export default RegisterPage;
