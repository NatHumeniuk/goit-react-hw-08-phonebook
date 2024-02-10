import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { apiRegisterUser } from 'store/operations';

import css from './RegisterPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();
    const name = e.currentTarget.elements.userName.value;
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };

    try {
      await dispatch(apiRegisterUser(formData)).unwrap();
      toast.success('Registration is successful!');
    } catch (error) {
      toast.error(`Registration failed: ${error.message}`);
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Create Your Account</h2>

      <form onSubmit={onSubmit} className={css.form}>
        <label className={css.label}>
          Name:
          <input
            type="text"
            name="userName"
            placeholder="Jane"
            minLength={2}
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Email:
          <input
            type="email"
            name="userEmail"
            placeholder="Jane123@gmail.ua"
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="*******"
            minLength={7}
            required
            className={css.input}
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default RegisterPage;
