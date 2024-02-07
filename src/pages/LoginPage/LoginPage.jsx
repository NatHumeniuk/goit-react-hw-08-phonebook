import React from 'react';
import { useDispatch } from 'react-redux';
import { apiLoginUser } from 'store/operations';

import css from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(apiLoginUser(formData));
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Welcome Back!</h2>

      <form onSubmit={onSubmit} className={css.form}>
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
            placeholder="**********"
            minLength={7}
            required
            className={css.input}
          />
        </label>
        <button type="submit" className={css.formBtn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
