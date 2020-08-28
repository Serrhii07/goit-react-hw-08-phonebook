import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/register"
      exact
    >
      Registration
    </NavLink>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/login"
      exact
    >
      Login
    </NavLink>
  </div>
);

export default AuthNav;
