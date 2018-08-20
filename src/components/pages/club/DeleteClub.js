import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReduxDeleteClub from '../../fragments/club/delete/ReduxDeleteClub';

export default class DeleteClub extends Component {
  render () {
    let clubId = this.props.match.params.id;
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <ReduxDeleteClub id={clubId} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

DeleteClub.propTypes = {
  match: PropTypes.object.isRequired
};
