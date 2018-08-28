import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class ClubDetailsNavigation extends Component {
  static propTypes = {
    clubId: PropTypes.string.isRequired
  };

  render () {
    let {clubId} = this.props;
    return (
      <div>
        <aside className='menu'>
          <p className='menu-label'>
            General
          </p>
          <ul className='menu-list'>
            <li>
              <NavLink to={'/club/' + clubId + '/details/information'} activeClassName='is-active'>
                Information
              </NavLink>
            </li>
            <li>
              <NavLink to={'/club/' + clubId + '/details/announcements'} activeClassName='is-active'>
                Announcements
              </NavLink>
            </li>
            <li>
              <NavLink to={'/club/' + clubId + '/details/members'} activeClassName='is-active'>
                Members
              </NavLink>
            </li>
            <li>
              <NavLink to={'/club/' + clubId + '/details/meetings'} activeClassName='is-active'>
                Meetings
              </NavLink>
            </li>
            <li>
              <NavLink to={'/club/' + clubId + '/details/functions'} activeClassName='is-active'>
                Functions
              </NavLink>
            </li>
            <li>
              <NavLink to={'/club/' + clubId + '/details/merch'} activeClassName='is-active'>
                Merch
              </NavLink>
            </li>
            <li>
              <NavLink to={'/club/' + clubId + '/details/service'} activeClassName='is-active'>
                Service Projects
              </NavLink>
            </li>
          </ul>
          <p className='menu-label'>
            Manage
          </p>
          <ul className='menu-list'>
            <li>
              <NavLink to={'/club/' + clubId + '/details/permissions'} activeClassName='is-active'>
                Permissions
              </NavLink>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}
