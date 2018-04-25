import React, {Component} from 'react';
import {connect} from 'react-redux';
import List from './List';
import PropTypes from 'prop-types';

class ReduxList extends Component {
  componentDidMount () {
    // Do API request here
    this.props.store.dispatch({
      type: 'CLUB_LIST_API',
      clubs: [
        {
          name: 'Chi Sigma Alpha'
        }
      ]
    });
  }

  render () {
    return <List clubs={this.props.clubs} />;
  }
}

const mapStateToProps = function (store) {
  return {
    clubs: store.userState.clubs
  };
};

ReduxList.propTypes = {
  clubs: PropTypes.array.required,
  store: PropTypes.object.required
};

export default connect(mapStateToProps)(ReduxList);
