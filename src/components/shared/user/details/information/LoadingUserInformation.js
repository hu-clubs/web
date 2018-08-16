import PropTypes from 'prop-types';
import React, {Component} from 'react';
import WithLoading from '../../../../util/loading/WithLoading';
import UserInformation from './UserInformation';

const UserInformationWithLoading = WithLoading(UserInformation);

class LoadingUserInformation extends Component {
  componentDidMount () {
    this.props.onFetchClub();
  }

  render () {
    return (
      <UserInformationWithLoading isFetching={this.props.isFetching} error={this.props.error} user={this.props.user} />
    );
  }
}

LoadingUserInformation.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  user: PropTypes.object,
  onFetchClub: PropTypes.func.isRequired
};

export default LoadingUserInformation;
