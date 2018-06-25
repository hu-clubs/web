import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../shared/loading/Loading';
import ErrorNotification from '../../../shared/error/ErrorNotification';
import Details from './Details';

class LoadingDeatails extends Component {
  componentDidMount () {
    this.props.onFetchClubs();
  }

  render () {
    const {isFetching, clubs, error, match} = this.props;
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-fifth'>
                <aside className='menu'>
                  <p className='menu-label'>
                    General
                  </p>
                  <ul className='menu-list'>
                    <li><a className='is-active'>Information</a></li>
                    <li><a>Members</a></li>
                    <li><a>Gatherings</a></li>
                  </ul>
                </aside>
              </div>
              <div className='column is-four-fifths'>
                {isFetching
                  ? <React.Fragment><h1 className='title is-1'>Club Details</h1><Loading /></React.Fragment> : error
                    ? <ErrorNotification title={error.message} message={error.stack} />
                    : <Details club={clubs[match.params.id]} />}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

LoadingDeatails.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  clubs: PropTypes.object.isRequired,
  error: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  onFetchClubs: PropTypes.func.isRequired
};

export default LoadingDeatails;
