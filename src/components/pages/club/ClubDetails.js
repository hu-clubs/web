import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import ReduxClubInformation from '../../shared/club/details/information/ReduxClubInformation';
import ReduxClubMembers from '../../shared/club/details/members/ReduxClubMembers';
import ReduxClubMeetings from '../../shared/club/details/meetings/ReduxClubMeetings';
import ComingSoon from '../../util/ComingSoon';
import ErrorNotification from '../../util/errorNotification/ErrorNotification';

class ClubDetails extends Component {
  render () {
    let clubId = this.props.match.params.id;
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

                  <Route path={this.props.match.url + '/information'}
                    render={() => {
                      return <ReduxClubInformation id={clubId} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/members'}
                    render={() => {
                      return <ReduxClubMembers id={clubId} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/meetings'}
                    render={() => {
                      return <ReduxClubMeetings id={clubId} />;
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

ClubDetails.propTypes = {
  match: PropTypes.object.isRequired
};

export default ClubDetails;
