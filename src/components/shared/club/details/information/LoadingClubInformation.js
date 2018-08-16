import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WithLoading from '../../../../util/loading/WithLoading';
import ClubInformation from './ClubInformation';

const InformationWithLoading = WithLoading(ClubInformation);

class LoadingClubInformation extends Component {
  componentDidMount () {
    this.props.onFetchClub();
  }

  render () {
    return (
      <InformationWithLoading isFetching={this.props.isFetching} error={this.props.error} club={this.props.club} />
    );
  }
}

LoadingClubInformation.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  club: PropTypes.object,
  onFetchClub: PropTypes.func.isRequired
};

export default LoadingClubInformation;
