import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <h1 className='title is-1'>Club Details</h1>
              <div>
                <p>{this.props.club.name}</p>
                <p>{this.props.club.id}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Details.propTypes = {
  club: PropTypes.object.isRequired
};

export default Details;
