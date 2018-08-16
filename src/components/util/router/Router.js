import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ReduxLogin from '../../pages/authentication/login/ReduxLogin';
import LoginHelp from '../../pages/authentication/loginHelp/LoginHelp';
import ReduxRegister from '../../pages/authentication/register/ReduxRegister';
import RegisterHelp from '../../pages/authentication/registerHelp/RegisterHelp';
import ClubDetails from '../../pages/club/ClubDetails';
import ClubList from '../../pages/club/ClubList';
import ReduxCreateClub from '../../pages/club/createClub/ReduxCreateClub';
import DeleteClub from '../../pages/club/DeleteClub';
import ErrorPage from '../../pages/ErrorPage';
import Home from '../../pages/home/Home';
import UserDetails from '../../pages/user/UserDetails';
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

            <Route path='/club/:id/details'
              render={(props) => {
                return this.isLoggedIn() ? <ClubDetails {...props} /> : <ReduxLogin />;
              }}
            />

            <Route path='/club/:id/delete'
              render={(props) => {
                return this.isLoggedIn() ? <DeleteClub {...props} /> : <ReduxLogin />;
              }}
            />

            <Route path='/club/create'
              render={(props) => {
                return this.isLoggedIn() ? <ReduxCreateClub {...props} /> : <ReduxLogin />;
              }}
            />

            <Route path='/user/:id/details'
              render={(props) => {
                return this.isLoggedIn() ? <UserDetails {...props} /> : <ReduxLogin />;
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
