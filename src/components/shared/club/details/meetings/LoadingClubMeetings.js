import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WithLoading from '../../../../util/loading/WithLoading';
import ClubMeetings from './ClubMeetings';

const MembersWithLoading = WithLoading(ClubMeetings);

class LoadingClubMeetings extends Component {
  componentDidMount () {
    this.props.onFetchClub();
  }

  render () {
    return (
      <MembersWithLoading isFetching={this.props.isFetching} error={this.props.error} club={this.props.club} />
    );
  }
}

LoadingClubMeetings.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  club: PropTypes.object,
  onFetchClub: PropTypes.func.isRequired
};

export default LoadingClubMeetings;
