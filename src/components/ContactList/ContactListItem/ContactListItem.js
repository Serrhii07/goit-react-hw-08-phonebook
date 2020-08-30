import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ name, number, deleteContact }) => (
  <li className={styles.contact_item}>
    <p>{name}:</p>
    <p>{number}</p>
    <Button
      color="secondary"
      variant="contained"
      size="small"
      type="button"
      onClick={deleteContact}
    >
      Delete
    </Button>
  </li>
);

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
