import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { phonebookOperations, phonebookSelectors } from '../../redux/phonebook';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validContact = this.getValidContact();
    if (validContact) {
      this.props.onSubmit(this.state);
    }

    this.reset();
  };

  getValidContact = () => {
    const { contacts } = this.props;
    const { name, number } = this.state;
    const normalizedName = name.toLowerCase().trim();
    const duplicateName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName,
    );
    const normalizedNumber = Number(number.trim());
    const duplicateNumber = contacts.find(
      contact => Number(contact.number) === normalizedNumber,
    );

    if (duplicateName) {
      toast.info(`${name} is already in contacts.`);
      return;
    }

    if (duplicateNumber) {
      toast.info(`${number} is already in contacts.`);
      return;
    }

    if (!name || !number) {
      toast.info('Please, fill the form');
      return;
    }

    if (!normalizedNumber) {
      toast.info(`${number} is not a number.`);
      return;
    }

    return { name, number };
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <TextField
          label="Name"
          name="name"
          type="text"
          value={this.state.name}
          variant="outlined"
          color="primary"
          onChange={this.handleChange}
        />
        <TextField
          label="Number"
          name="number"
          type="tel"
          value={this.state.number}
          variant="outlined"
          color="primary"
          onChange={this.handleChange}
        />

        <Button color="primary" variant="contained" size="small" type="submit">
          Add contact
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(phonebookOperations.addContact({ name, number })),
});

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
