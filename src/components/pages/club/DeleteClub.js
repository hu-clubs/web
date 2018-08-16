import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReduxDeleteClub from '../../shared/club/delete/ReduxDeleteClub';

export default class DeleteClub extends Component {
  render () {
    let clubId = this.props.match.params.id;
    return (
      <ReduxDeleteClub id={clubId} />
    );
  }
}

DeleteClub.propTypes = {
  match: PropTypes.object.isRequired
};
