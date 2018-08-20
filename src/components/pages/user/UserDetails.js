import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import ReduxUserInformation from '../../fragments/user/details/information/ReduxUserInformation';
import ErrorNotification from '../../fragments/misc/errorNotification/ErrorNotification';

class ClubDetails extends Component {
  render () {
    let userId = this.props.match.params.id;
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
                    <li><NavLink to={'/user/' + userId + '/details/information'} activeClassName='is-active'>Information</NavLink></li>
                  </ul>
                  <p className='menu-label'>
                    Manage
                  </p>
                </aside>
              </div>
              <div className='column is-four-fifths'>
                <Switch>
                  <Route path={this.props.match.url + '/'} exact
                    render={() => {
                      return <Redirect to={'/user/' + userId + '/details/information'} />;
                    }}
                  />

                  <Route path={this.props.match.url + '/information'}
                    render={() => {
                      return <ReduxUserInformation id={userId} />;
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
  match: PropTypes.object
};

export default ClubDetails;
