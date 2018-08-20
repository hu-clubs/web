import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ReduxEditClub from '../../fragments/club/edit/ReduxEditClub';

export default class EditClub extends Component {
  render () {
    let clubId = this.props.match.params.id;
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-three-fifths is-offset-one-fifth'>
                <ReduxEditClub id={clubId} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

EditClub.propTypes = {
  match: PropTypes.object.isRequired
};
