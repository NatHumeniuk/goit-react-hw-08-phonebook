import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import { selectUserIsLoggedIn } from 'store/user/userSlice.selectors';

import css from './SharedLayout.module.css';

const SharedLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  return (
    <div className={css.container}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};
export default SharedLayout;
