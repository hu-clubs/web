import PropTypes from 'prop-types';
import React, {Component} from 'react';

class ClubMeetings extends Component {
  render () {
    return (
      <div>
        <nav className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <h1 className='is-title is-size-3'>{this.props.club.name} Meetings</h1>
            </div>
          </div>
          <div className='level-right'>
            <button className='button is-success'>Create Meeting</button>
          </div>
        </nav>
        <table className='table is-fullwidth'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th># of Members Attended</th>
            </tr>
          </thead>
          <tbody />
        </table>
      </div>
    );
  }
}

ClubMeetings.propTypes = {
  club: PropTypes.object.isRequired
};

export default ClubMeetings;
