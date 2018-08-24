import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch, withRouter} from 'react-router-dom';
import ComingSoon from '../../../fragments/ComingSoon';
import ErrorNotification from '../../../fragments/errorNotification/ErrorNotification';
import ClubInformation from './ClubInformation';
import ClubMeetings from './ClubMeetings';
import ClubMembers from './ClubMembers';

class ClubDetails extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    club: PropTypes.object.isRequired
  };

  render () {
    let club = this.props.club;
    let {clubId} = this.props.club;
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-fifth'>
                <aside className='menu'>
                  <p className='menu-label'>
                    General
                  </p>
                  <ul className='menu-list'>
                    <li><NavLink to={'/club/' + clubId + '/details/information'} activeClassName='is-active'>Information</NavLink></li>
                    <li><NavLink to={'/club/' + clubId + '/details/announcements'} activeClassName='is-active'>Announcements</NavLink></li>
                    <li><NavLink to={'/club/' + clubId + '/details/members'} activeClassName='is-active'>Members</NavLink></li>
                    <li><NavLink to={'/club/' + clubId + '/details/meetings'} activeClassName='is-active'>Meetings</NavLink></li>
                    <li><NavLink to={'/club/' + clubId + '/details/functions'} activeClassName='is-active'>Functions</NavLink></li>
                    <li><NavLink to={'/club/' + clubId + '/details/merch'} activeClassName='is-active'>Merch</NavLink></li>
                    <li><NavLink to={'/club/' + clubId + '/details/service'} activeClassName='is-active'>Service Projects</NavLink></li>
                  </ul>
                  <p className='menu-label'>
                    Manage
                  </p>
                  <ul className='menu-list'>
                    <li><NavLink to={'/club/' + clubId + '/details/permissions'} activeClassName='is-active'>Permissions</NavLink></li>
                  </ul>
                </aside>
              </div>
              <div className='column is-four-fifths'>
                <Switch>
                  <Route path={this.props.match.url + '/'} exact
                    render={() => {
                      return <Redirect to={'/club/' + clubId + '/details/information'} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/announcements'}
                    render={() => {
                      return <ComingSoon />;
                    }}
                  />

                  <Route path={this.props.match.url + '/information'}
                    render={() => {
                      return <ClubInformation club={club} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/members'}
                    render={() => {
                      return <ClubMembers club={club} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/meetings'}
                    render={() => {
                      return <ClubMeetings club={club} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/functions'}
                    render={() => {
                      return <ComingSoon />;
                    }}
                  />

                  <Route path={this.props.match.url + '/merch'}
                    render={() => {
                      return <ComingSoon />;
                    }}
                  />

                  <Route path={this.props.match.url + '/service'}
                    render={() => {
                      return <ComingSoon />;
                    }}
                  />

                  <Route path={this.props.match.url + '/permissions'}
                    render={() => {
                      return <ComingSoon />;
                    }}
                  />

                  <Route
                    render={() => <ErrorNotification title='Page not found'
                      message='The page you were looking for could not be found' />}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(ClubDetails);
