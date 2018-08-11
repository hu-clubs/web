import React, {Component} from 'react';
import ClubList from '../../shared/club/list/ReduxList';

export default class List extends Component {
  render () {
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-third is-offset-one-third'>
                <h1 className='title is-1'>Club List</h1>
                <ClubList />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
