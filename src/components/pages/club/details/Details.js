import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route, Switch} from 'react-router-dom';
import Information from '../../../shared/club/Information';

class Details extends Component {
  componentDidMount () {
    this.props.onFetchClubs();
  }

  render () {
    let clubId = this.props.match.params.id;
    let club = this.props.clubs[clubId];
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
                    <li><a className='is-active'>Information</a></li>
                    <li><a>Members</a></li>
                    <li><a>Meetings</a></li>
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
                      return <Information club={club} />;
                    }}
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

Details.propTypes = {
  clubs: PropTypes.object.isRequired,
  match: PropTypes.object,
  onFetchClubs: PropTypes.func
};

export default Details;
