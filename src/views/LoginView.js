import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import { authOperations } from '../redux/auth';
import styles from './LoginView.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const validLoginData = this.getValidLoginData();
    if (validLoginData) {
      this.props.onLogin(this.state);
    }

    this.reset();
  };

  getValidLoginData = () => {
    const { email, password } = this.state;

    if (!email || !password) {
      toast.info(`Please, fill the form.`);
      return;
    }

    return { email, password };
  };

  reset = () => {
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <ToastContainer />
        <h1 className={styles.header}>Login page</h1>

        <form className={styles.form} onSubmit={this.handleSubmit}>
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
            Enter
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
