import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import ComingSoon from '../../../fragments/ComingSoon';
import ErrorNotification from '../../../fragments/errorNotification/ErrorNotification';
import ClubInformation from './ClubInformation';
import ClubMeetings from './ClubMeetings';
import ClubMembers from './ClubMembers';
import PropTypes from 'prop-types';

export default class ClubDetailsRouter extends Component {
  static propTypes = {
    club: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  render () {
    let {club, match} = this.props;
    let clubId = club._id;
    return (
      <div className='column is-four-fifths'>
        <Switch>
          <Route path={match.url + '/'} exact
            render={() => {
              return <Redirect to={'/club/' + clubId + '/details/information'} />;
            }}
          />

          <Route path={match.url + '/announcements'}
            render={() => {
              return <ComingSoon />;
            }}
          />

          <Route path={match.url + '/information'}
            render={() => {
              return <ClubInformation club={club} />;
            }}
          />

          <Route path={match.url + '/members'}
            render={() => {
              return <ClubMembers club={club} />;
            }}
          />

          <Route path={match.url + '/meetings'}
            render={() => {
              return <ClubMeetings club={club} />;
            }}
          />

          <Route path={match.url + '/functions'}
            render={() => {
              return <ComingSoon />;
            }}
          />

          <Route path={match.url + '/merch'}
            render={() => {
              return <ComingSoon />;
            }}
          />

          <Route path={match.url + '/service'}
            render={() => {
              return <ComingSoon />;
            }}
          />

          <Route path={match.url + '/permissions'}
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
    );
  }
}
