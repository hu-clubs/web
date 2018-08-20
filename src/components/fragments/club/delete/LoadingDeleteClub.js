import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WithLoading from '../../../util/hoc/WithLoading';
import ClubInformation from './DeleteClub';

const InformationWithLoading = WithLoading(ClubInformation);

class LoadingDeleteClub extends Component {
  componentDidMount () {
    this.props.onFetchClub();
  }

  render () {
    return (
      <InformationWithLoading isFetching={this.props.isFetching} error={this.props.error} club={this.props.club} onDelete={this.props.onDelete} />
    );
  }
}

LoadingDeleteClub.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  club: PropTypes.object,
  onFetchClub: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default LoadingDeleteClub;
