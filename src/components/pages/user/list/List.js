import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class List extends Component {
  render () {
    let userListItems = Object.keys(this.props.users).map((key) => (
      <tr key={key}>
        <td>
          { this.props.users[key].firstName + ' ' + this.props.users[key].lastName }
        </td>
        <td>
          <Link to={{pathname: '/user/' + this.props.users[key]._id + '/details/'}}>{this.props.users[key].email}</Link>
        </td>
      </tr>
    ));
    return (
      <table className='table is-fullwidth'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userListItems}
        </tbody>
      </table>
    );
  }
}

List.propTypes = {
  users: PropTypes.object.isRequired
};

export default List;
