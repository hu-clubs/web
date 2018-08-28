import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import LoginView from '../../views/authentication/login/LoginView';
import LoginHelp from '../../views/authentication/loginHelp/LoginHelp';
import RegisterView from '../../views/authentication/register/RegisterView';
import RegisterHelp from '../../views/authentication/registerHelp/RegisterHelp';
import CreateClubContainer from '../../views/club/create/CreateClubContainer';
import DeleteClubView from '../../views/club/delete/DeleteClubView';
import ClubDetailsContainer from '../../views/club/details/ClubDetailsContainer';
import EditClubView from '../../views/club/edit/EditClubView';
import ClubListView from '../../views/club/list/ClubListView';
import ErrorBoundary from '../../views/ErrorBoundary';
import ErrorPage from '../../views/ErrorPage';
import Home from '../../views/home/Home';
import UserDetails from '../../views/user/details/UserDetails';

export default class Router extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
  };

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
                return this.isLoggedIn() ? <Redirect to='/' /> : <LoginView />;
              }}
            />

            <Route path='/login/help' exact
              component={LoginHelp} />

            <Route path='/register' exact
              render={() => {
                return this.isLoggedIn() ? <Redirect to='/' /> : <RegisterView />;
              }}
            />

            <Route path='/register/help' exact
              component={RegisterHelp} />

            <Route path='/club/list' exact
              render={() => {
                return this.isLoggedIn() ? <ClubListView /> : <LoginView />;
              }}
            />

            <Route path='/club/:id/details'
              render={({match}) => {
                return this.isLoggedIn() ? <ClubDetailsContainer clubId={match.params.id} /> : <LoginView />;
              }}
            />

            <Route path='/club/:id/delete'
              render={() => {
                return this.isLoggedIn() ? <DeleteClubView /> : <LoginView />;
              }}
            />

            <Route path='/club/:id/edit'
              render={() => {
                return this.isLoggedIn() ? <EditClubView /> : <LoginView />;
              }}
            />

            <Route path='/club/create'
              render={() => {
                return this.isLoggedIn() ? <CreateClubContainer /> : <LoginView />;
              }}
            />

            <Route path='/user/:id/details'
              render={() => {
                return this.isLoggedIn() ? <UserDetails /> : <LoginView />;
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
