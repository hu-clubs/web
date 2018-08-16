import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
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

  renderNavigationMenu () {
    if (this.props.isLoggedIn) {
      return (
        <div className='navbar-end'>
          <NavLink className='navbar-item' to='/club/list' activeClassName='is-active' exact>
            Clubs
          </NavLink>
          <div className='navbar-item has-dropdown is-hoverable'>
            <NavLink className='navbar-link' to={'/user/' + this.props.id + '/details'} activeClassName='is-active' exact>
              {this.props.firstName} {this.props.lastName}
            </NavLink>
            <div className='navbar-dropdown is-right'>
              <NavLink className='navbar-item' to={'/user/' + this.props.id + '/details'} activeClassName='is-active' exact>
                My Account
              </NavLink>
              <a className='navbar-item' onClick={this.props.onLogout}>Logout</a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='navbar-end'>
          <NavLink className='navbar-item' to='/login' activeClassName='is-active' exact>
            Login
          </NavLink>
          <NavLink className='navbar-item' to='/register' activeClassName='is-active' exact>
            Register
          </NavLink>
        </div>
      );
    }
  }

  render () {
    return (
      <nav className='navbar is-light' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <NavLink className='navbar-item' to='/' activeClassName='is-active' exact>
            Herd
          </NavLink>
          <a role='button' className={'navbar-burger ' + (this.isNavbarMenuActive() ? 'is-active' : '')}
            aria-label='menu' aria-expanded='false' onClick={event => this.toggleNavbarMenuActive(event)}>
            <span aria-hidden='true' />
            <span aria-hidden='true' />
            <span aria-hidden='true' />
          </a>
        </div>
        <div className={'navbar-menu ' + (this.isNavbarMenuActive() ? 'is-active' : '')}>
          {this.renderNavigationMenu()}
        </div>
      </nav>
    );
  }
}

Navigation.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  id: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired
};

export default Navigation;
