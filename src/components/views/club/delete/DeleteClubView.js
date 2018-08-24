import PropTypes from 'prop-types';
import React, {Component} from 'react';
import DeleteClubContainer from './DeleteClubContainer';

export default class DeleteClubView extends Component {
  render () {
    let clubId = this.props.match.params.id;
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <DeleteClubContainer id={clubId} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

DeleteClubView.propTypes = {
  match: PropTypes.object.isRequired
};
