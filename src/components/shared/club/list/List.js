import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends Component {
  render () {
    let clubs = Object.keys(this.props.clubs).map((key) => (
      <tr key={key}>
        <td>
          <Link to={{pathname: '/club/' + this.props.clubs[key]._id + '/details/'}}>{this.props.clubs[key].name}</Link>
        </td>
        <td>
          { this.props.clubs[key].members.length }
        </td>
      </tr>
    ));
    return (
      <table className='table is-fullwidth'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {clubs}
        </tbody>
      </table>
    );
  }
}

List.propTypes = {
  clubs: PropTypes.object.isRequired
};

export default List;
