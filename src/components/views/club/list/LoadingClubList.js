import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WithLoading from '../../../util/hoc/WithLoading';
import ClubList from './ClubList';

const ListWithLoading = WithLoading(ClubList);

class LoadingClubList extends Component {
  componentDidMount () {
    this.props.onFetchClubs();
  }

  render () {
    return (
      <ListWithLoading isFetching={this.props.isFetching} error={this.props.error} clubs={this.props.clubs} />
    );
  }
}

LoadingClubList.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]).isRequired,
  clubs: PropTypes.object.isRequired,
  onFetchClubs: PropTypes.func.isRequired
};

export default LoadingClubList;
