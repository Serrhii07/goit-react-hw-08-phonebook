import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import ContactsFilter from '../components/ContactsFilter';
import { phonebookSelectors } from '../redux/phonebook';

import styles from './ContactsView.module.css';

class ContactsView extends Component {
  render() {
    const { contactsList } = this.props;
    return (
      <Container>
        <div>
          <h1 className={styles.header}>Phonebook</h1>
          <ContactForm />
          <ToastContainer />
          <h2 className={styles.header}>Contacts</h2>
          {contactsList.length > 1 && <ContactsFilter />}
          <ContactList />
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contactsList: phonebookSelectors.getAllContacts(state),
});

export default connect(mapStateToProps)(ContactsView);
