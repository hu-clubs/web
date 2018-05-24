import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Register from './register/Register';
import LoginHelp from './login/LoginHelp';
import RegisterHelp from './register/RegisterHelp';
import ReduxList from './club/ReduxList';
import ReduxDetails from './club/ReduxDetails';

class Router extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/login/help' exact component={LoginHelp} />
          <Route path='/register' exact component={Register} />
          <Route path='/register/help' exact component={RegisterHelp} />
          <Route path='/club/list' exact component={ReduxList} />
          <Route path='/club/details/:id' exact component={ReduxDetails} />
        </Switch>
      </div>
    );
  }
}

export default Router;
