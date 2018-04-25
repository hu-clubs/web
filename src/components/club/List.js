import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render () {
    let clubListItems = this.props.clubs.map((club) => {
      return (
        <div>
          {club.name}
        </div>
      );
    });
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <h1 className='title is-1'>Club List</h1>
              <div>
                {clubListItems}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

List.propTypes = {
  clubs: PropTypes.array.required
};

export default List;
