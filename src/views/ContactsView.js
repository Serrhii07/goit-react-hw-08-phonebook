import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import ContactsFilter from '../components/ContactsFilter';

import styles from './ContactsView.module.css';

class ContactsView extends Component {
  render() {
    return (
      <Container>
        <div>
          <h1 className={styles.header}>Phonebook</h1>
          <ContactForm />
          <ToastContainer />
          <h2 className={styles.header}>Contacts</h2>
          <ContactsFilter />
          <ContactList />
        </div>
      </Container>
    );
  }
}

export default ContactsView;
