import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from './Container';
import AppBar from './AppBar';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import { authOperations } from '../redux/auth';

const HomeView = lazy(() =>
  import('../views/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('../views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(() =>
  import('../views/LoginView' /* webpackChunkName: "login-page" */),
);
const ContactsView = lazy(() =>
  import('../views/ContactsView' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute exact path="/" component={HomeView} />
            <PublicRoute
              path="/register"
              redirectTo="/contacts"
              restricted
              component={RegisterView}
            />
            <PublicRoute
              path="/login"
              redirectTo="/contacts"
              restricted
              component={LoginView}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={ContactsView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
