import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { apiLogoutUser } from 'store/operations';
import {
  selectUserData,
  selectUserIsLoading,
} from 'store/user/userSlice.selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const isLoading = useSelector(selectUserIsLoading);

  const handleLogOut = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? "Could't get user email";

  return (
    <div>
      <p>{userEmail}</p>
      <button onClick={handleLogOut} disabled={isLoading} type="button">
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
