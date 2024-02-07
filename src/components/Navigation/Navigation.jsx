import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHomeSmile2Line } from 'react-icons/ri';
import { ImAddressBook } from 'react-icons/im';
import { SiGnuprivacyguard } from 'react-icons/si';
import { GrLogin } from 'react-icons/gr';
import { useSelector } from 'react-redux';

import { selectUserIsLoggedIn } from 'store/user/userSlice.selectors';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
        to="/"
      >
        <RiHomeSmile2Line className={css.icon} />
      </NavLink>
      {isLoggedIn ? (
        <div className={css.wrapperTitle}>
          <NavLink
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
            to="/contacts"
          >
            <ImAddressBook className={css.icon} />
          </NavLink>
          <p className={css.title}>My phoneBook</p>
        </div>
      ) : (
        <div className={css.wrapperLogin}>
          <NavLink
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
            to="/register"
          >
            <SiGnuprivacyguard className={css.icon} />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${css.headerLink} ${isActive ? css.active : ''}`
            }
            to="/login"
          >
            <GrLogin className={css.icon} />
          </NavLink>
        </div>
      )}
    </>
  );
};
export default Navigation;
