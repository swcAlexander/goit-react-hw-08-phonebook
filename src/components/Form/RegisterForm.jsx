import React from "react";
import { toast } from 'react-toastify';
import { signUp } from 'servises/authorization';
import { useNavigate } from 'react-router-dom';
import styles from './Form.module.css';

export const RegisterForm = () => {
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
              <form className={styles.reg_form} onSubmit={handleSubmit}>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputName">Name</label>
          <input
            type="text"
            name="name"
            className={styles.reg_input}
             requered
            minLength={2}
            id="exsampleInputName"
          />
        </div>
        <div className={styles.reg_container}>
          <label htmlFor="exsampleInputEmail"  >Email address</label>
          <input
            type="email"
            name="email"

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
    )
}