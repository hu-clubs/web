import WithLoading from '../../../util/loading/WithLoading';
import List from './List';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

const ListWithLoading = WithLoading(List);

class LoadingList extends Component {
  componentDidMount () {
    this.props.onFetchClubs();
  }

  render () {
    return (
      <ListWithLoading isFetching={this.props.isFetching} error={this.props.error} clubs={this.props.clubs} />
    );
  }
}

LoadingList.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  clubs: PropTypes.object.isRequired,
  onFetchClubs: PropTypes.func.isRequired
};

export default LoadingList;
