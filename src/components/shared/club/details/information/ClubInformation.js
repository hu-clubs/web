import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class ClubInformation extends Component {
  render () {
    let club = this.props.club;
    return (
      <div>
        <nav className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <h1 className='is-title is-size-3'>{club.shortName}</h1>
            </div>
          </div>
          <div className='level-right'>
            <div className='field is-grouped'>
              <p className='control'>
                <button className='button is-primary'>Edit</button>
              </p>
              <p className='control'>
                <NavLink className='button is-danger' to={'/club/' + club._id + '/delete'}>Delete</NavLink>
              </p>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

ClubInformation.propTypes = {
  club: PropTypes.object.isRequired
};

export default ClubInformation;
