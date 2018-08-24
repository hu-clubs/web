import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReduxClubList from './ClubListContainer';

export default class ClubListView extends Component {
  render () {
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-third is-offset-one-third'>
                <nav className='level'>
                  <div className='level-left'>
                    <div className='level-item'>
                      <h1 className='title is-1'>Club List</h1>
                    </div>
                  </div>
                  <div className='level-right'>
                    <Link className='button is-success' to='/club/create'>Create</Link>
                  </div>
                </nav>
                <ReduxClubList />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
