import PropTypes from 'prop-types';
import React, {Component} from 'react';

class UserInformation extends Component {
  render () {
    return (
      <div>
        <h1 className='is-title is-size-3'>{this.props.user.firstName} {this.props.user.lastName}</h1>
      </div>
    );
  }
}

UserInformation.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserInformation;
