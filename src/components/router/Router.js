import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../home/Home';
import Register from '../authentication/register/Register';
import LoginHelp from '../authentication/login/LoginHelp';
import RegisterHelp from '../authentication/register/RegisterHelp';
import ReduxList from '../club/list/ReduxList';
import ReduxDetails from '../club/details/ReduxDetails';
import ReduxLogin from '../authentication/login/ReduxLogin';
import ErrorPage from '../error/ErrorPage';
import PropTypes from 'prop-types';

class Router extends Component {
  isLoggedIn () {
    return this.props.isLoggedIn;
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact render={() => { return this.isLoggedIn() ? <Redirect to='/' /> : <ReduxLogin />; }} />
          <Route path='/login/help' exact component={LoginHelp} />
          <Route path='/register' exact render={() => { return this.isLoggedIn() ? <Redirect to='/' /> : <Register />; }} />
          <Route path='/register/help' exact component={RegisterHelp} />
          <Route path='/club/list' exact render={() => { return this.isLoggedIn() ? <ReduxList /> : <ReduxLogin />; }} />
          <Route path='/club/:id/details' exact component={ReduxDetails} render={() => { return this.isLoggedIn() ? <ReduxList /> : <ReduxLogin />; }} />
          <Route render={() => <ErrorPage title='Page not found' message='The page you were looking for could not be found' />} />
        </Switch>
      </div>
    );
  }
}

Router.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default Router;
