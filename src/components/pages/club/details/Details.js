import React, {Component} from 'react';
import PropTypes from 'prop-types';
import List from '../../user/list/List';

class Details extends Component {
  render () {
    return (
      <div>
        <h1 className='title is-1'>{this.props.club.name}</h1>
        <div>
          <p>{this.props.club._id}</p>
          <List users={this.props.club.members} />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  club: PropTypes.object.isRequired
};

export default Details;
