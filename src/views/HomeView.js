import React from 'react';
import styles from './HomeView.module.css';

const HomeView = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your phonebook</h1>
    </div>
  );
};

export default HomeView;
