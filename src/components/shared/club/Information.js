import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render () {
    return (
      <div>
        {this.props.club.id}
      </div>
    );
  }
}

Details.propTypes = {
  club: PropTypes.object.isRequired
};

export default Details;
