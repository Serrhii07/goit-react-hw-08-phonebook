import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { authOperations } from '../redux/auth';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validRegistrationData = this.getValidRegistrationData();
    if (validRegistrationData) {
      this.props.onRegister(this.state);
    }

    this.reset();
  };

  getValidRegistrationData = () => {
    const { name, email, password } = this.state;

    if (!name || !email || !password) {
      toast.info(`Please, fill the form.`);
      return;
    }

    return { name, email, password };
  };

  reset = () => {
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <ToastContainer />
        <h1 className={styles.header}>Registration page</h1>

        <form className={styles.form} onSubmit={this.handleSubmit}>
          <TextField
            label="Name"
            name="name"
            type="text"
            value={name}
            variant="outlined"
            color="primary"
            onChange={this.handleChange}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            variant="outlined"
            color="primary"
            onChange={this.handleChange}
          />

          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            variant="outlined"
            color="primary"
            onChange={this.handleChange}
          />

          <Button
            color="primary"
            variant="contained"
            size="small"
            type="submit"
          >
            Register
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
