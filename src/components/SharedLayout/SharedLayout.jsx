import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserIsLoggedIn } from 'store/user/userSlice.selectors';

const SharedLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  return (
    <div>
      <header>
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
      <main>{children}</main>
    </div>
  );
};
export default SharedLayout;
