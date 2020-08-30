import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import styles from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.container}>
    <img className={styles.avatar} src={avatar} alt="" width="32" />
    <span className={styles.name}>Welcome, {name}</span>
    <Button
      onClick={onLogout}
      color="secondary"
      variant="contained"
      size="small"
      type="button"
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  avatar: defaultAvatar,
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
