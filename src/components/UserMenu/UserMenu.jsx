import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { GrLogout } from 'react-icons/gr';

import { apiLogoutUser } from 'store/operations';
import {
  selectUserData,
  selectUserIsLoading,
} from 'store/user/userSlice.selectors';

import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectUserIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";

  return (
    <div className={css.wrapper}>
      <BsFillPersonCheckFill className={css.icon} />
      <p className={css.email}>{userEmail}</p>
      <button
        onClick={handleLogOut}
        disabled={isLoading}
        type="button"
        className={css.btnOut}
      >
        <GrLogout className={css.iconOut} />
      </button>
    </div>
  );
};
export default UserMenu;
