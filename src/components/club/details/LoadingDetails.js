import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Loading from '../../loading/Loading';
import ErrorNotification from '../../error/ErrorNotification';
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
              <div className='column is-one-third is-offset-one-third'>
                { isFetching ? <React.Fragment><h1 className='title is-1'>Club Details</h1><Loading /></React.Fragment> : error ? <ErrorNotification title={error.message} message={error.stack} /> : <Details club={clubs[match.params.id]} />}
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
