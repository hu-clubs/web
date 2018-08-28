import React, {Component} from 'react';
import ClubDetailsNavigation from './ClubDetailsNavigation';
import ClubDetailsRouter from './ClubDetailsRouterContainer';
import PropTypes from 'prop-types';

export default class ClubDetails extends Component {
  static propTypes = {
    club: PropTypes.object.isRequired
  };

  render () {
    let club = this.props.club;
    let clubId = this.props.club._id;
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-fifth'>
              <ClubDetailsNavigation clubId={clubId} />
            </div>
            <div className='column is-four-fifths'>
              <ClubDetailsRouter club={club} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
