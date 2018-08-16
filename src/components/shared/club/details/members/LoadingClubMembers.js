import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WithLoading from '../../../../util/loading/WithLoading';
import ClubMembers from './ClubMembers';

const MembersWithLoading = WithLoading(ClubMembers);

class LoadingClubMembers extends Component {
  componentDidMount () {
    this.props.onFetchClub();
  }

  render () {
    return (
      <MembersWithLoading isFetching={this.props.isFetching} error={this.props.error} club={this.props.club} />
    );
  }
}

LoadingClubMembers.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  club: PropTypes.object,
  onFetchClub: PropTypes.func.isRequired
};

export default LoadingClubMembers;
