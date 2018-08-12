import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../../pages/home/Home';
import ReduxRegister from '../../pages/authentication/register/ReduxRegister';
import LoginHelp from '../../pages/authentication/login/LoginHelp';
import RegisterHelp from '../../pages/authentication/register/RegisterHelp';
import ClubList from '../../pages/club/List';
import ClubReduxDetails from '../../pages/club/details/ReduxDetails';
import ReduxLogin from '../../pages/authentication/login/ReduxLogin';
import ErrorPage from '../../pages/ErrorPage';
import PropTypes from 'prop-types';
import ErrorBoundary from '../ErrorBoundary';

class Router extends Component {
  isLoggedIn () {
    return this.props.isLoggedIn;
  }

  render () {
    return (
      <div>
        <ErrorBoundary>
          <Switch>
            <Route path='/' exact
              render={() => {
                return this.isLoggedIn() ? <Redirect to='/club/list' /> : <Home />;
              }}
            />

            <Route path='/login' exact
              render={() => {
                return this.isLoggedIn() ? <Redirect to='/' /> : <ReduxLogin />;
              }}
            />

            <Route path='/login/help' exact
              component={LoginHelp} />

            <Route path='/register' exact
              render={() => {
                return this.isLoggedIn() ? <Redirect to='/' /> : <ReduxRegister />;
              }}
            />

            <Route path='/register/help' exact
              component={RegisterHelp} />

            <Route path='/club/list' exact
              render={() => {
                return this.isLoggedIn() ? <ClubList /> : <ReduxLogin />;
              }}
            />

            <Route path='/club/:id/details' exact
              render={(props) => {
                return this.isLoggedIn() ? <ClubReduxDetails {...props} /> : <ReduxLogin />;
              }}
            />

            <Route
              render={() => <ErrorPage title='Page not found'
                message='The page you were looking for could not be found' />}
            />
          </Switch>
        </ErrorBoundary>
      </div>
    );
  }
}

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Router;
