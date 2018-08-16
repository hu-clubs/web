import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import ConfirmationPage from '../../../util/confirmationPage/ConfirmationPage';
import { withRouter } from 'react-router';

class DeleteClub extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasBeenSubmitted: false
    };
  }

  onDelete () {
    this.setState({
      hasBeenSubmitted: true
    });
    this.props.onDelete();
  }

  onCancel () {
    this.props.history.goBack();
  }

  render () {
    console.log(this.props.history);
    let club = this.props.club;
    if (this.state.hasBeenSubmitted && !this.props.isFetching && !this.props.error) {
      return (<Redirect to='/club/list' />);
    }
    return (
      <ConfirmationPage title='Confirm Action'
        message={'Are you sure you want to delete ' + club.name + '? This action cannot be undone.'}
        onConfirm={() => this.onDelete()}
        onCancel={() => this.onCancel()} />
    );
  }
}

DeleteClub.propTypes = {
  club: PropTypes.object.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(DeleteClub);
