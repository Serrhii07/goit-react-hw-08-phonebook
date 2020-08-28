import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/"
      exact
    >
      Home
    </NavLink>

    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/contacts"
      exact
    >
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
