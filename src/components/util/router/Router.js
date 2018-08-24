import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import LoginContainer from '../../views/authentication/login/LoginContainer';
import LoginHelp from '../../views/authentication/loginHelp/LoginHelp';
import ReduxRegister from '../../views/authentication/register/RegisterContainer';
import RegisterHelp from '../../views/authentication/registerHelp/RegisterHelp';
import ClubListView from '../../views/club/list/ClubListView';
import CreateClubContainer from '../../views/club/create/CreateClubContainer';
import ClubDetailsContainer from '../../views/club/details/ClubDetailsContainer';
import DeleteClubView from '../../views/club/delete/DeleteClubView';
import ErrorPage from '../../views/ErrorPage';
import Home from '../../views/home/Home';
import UserDetails from '../../views/user/details/UserDetails';
import ErrorBoundary from '../../views/ErrorBoundary';
import EditClubView from '../../views/club/edit/EditClubView';

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
                return this.isLoggedIn() ? <Redirect to='/' /> : <LoginContainer />;
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
                return this.isLoggedIn() ? <ClubListView /> : <LoginContainer />;
              }}
            />

            <Route path='/club/:id/details'
              render={({match}) => {
                return this.isLoggedIn() ? <ClubDetailsContainer club={match.params.id} /> : <LoginContainer />;
              }}
            />

            <Route path='/club/:id/delete'
              render={() => {
                return this.isLoggedIn() ? <DeleteClubView /> : <LoginContainer />;
              }}
            />

            <Route path='/club/:id/edit'
              render={() => {
                return this.isLoggedIn() ? <EditClubView /> : <LoginContainer />;
              }}
            />

            <Route path='/club/create'
              render={() => {
                return this.isLoggedIn() ? <CreateClubContainer /> : <LoginContainer />;
              }}
            />

            <Route path='/user/:id/details'
              render={() => {
                return this.isLoggedIn() ? <UserDetails /> : <LoginContainer />;
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
