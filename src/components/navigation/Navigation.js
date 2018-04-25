import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isNavbarMenuActive: false
    };
  }

  toggleNavbarMenuActive () {
    this.setState(previousState => {
      return {
        isNavbarMenuActive: !previousState.isNavbarMenuActive
      };
    });
  }

  isNavbarMenuActive () {
    return this.state.isNavbarMenuActive;
  }

  render () {
    return (
      <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item'>
            Herd
          </a>
          <a role='button' className={'navbar-burger ' + (this.isNavbarMenuActive() ? 'is-active' : '')}
            aria-label='menu' aria-expanded='false' onClick={event => this.toggleNavbarMenuActive(event)}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div className={'navbar-menu ' + (this.isNavbarMenuActive() ? 'is-active' : '')}>
          <div className='navbar-end'>
            <Link className='navbar-item' to='/login'>
              Login
            </Link>
            <Link className='navbar-item' to='/register'>
              Register
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default App;
