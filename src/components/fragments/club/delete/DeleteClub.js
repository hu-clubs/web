import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { withRouter } from 'react-router';

class DeleteClub extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasBeenSubmitted: false
    };
  }

  onDelete = () => {
    this.setState({
      hasBeenSubmitted: true
    });
    this.props.onDelete();
  };

  onCancel = () => {
    this.props.history.goBack();
  };

  render () {
    console.log(this.props.history);
    let club = this.props.club;
    if (this.state.hasBeenSubmitted && !this.props.isFetching && !this.props.error) {
      return (<Redirect to='/club/list' />);
    }
    return (
      <article className='message is-danger'>
        <div className='message-header'>
          <p>Confirm Action</p>
        </div>
        <div className='message-body'>
          <p className='confirmation-message'>
            Are you sure you want to delete {club.name}? You cannot undo this action.
          </p>
          <nav className='level'>
            <div className='level-left' />
            <div className='level-right'>
              <div className='buttons'>
                <a className='button is-danger' onClick={this.onDelete}>Delete</a>
                <a className='button' onClick={this.onCancel}>Cancel</a>
              </div>
            </div>
          </nav>
        </div>
      </article>
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
