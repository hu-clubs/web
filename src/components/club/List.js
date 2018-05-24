import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends Component {
  render () {
    let clubListItems = Object.keys(this.props.clubs).map((key) => (
      <tr key={key}>
        <td>
          <Link to={{pathname: '/club/details/' + this.props.clubs[key]._id}}>{this.props.clubs[key].name}</Link>
        </td>
        <td>
          1
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
          {clubListItems}
        </tbody>
      </table>
    );
  }
}

List.propTypes = {
  clubs: PropTypes.object.isRequired
};

export default List;
