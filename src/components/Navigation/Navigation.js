import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import styles from './Navigation.module.css';

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink
      className={styles.link}
      activeClassName={styles.activeLink}
      to="/"
      exact
    >
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/contacts"
        exact
      >
        Contacts
      </NavLink>
    )}
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
