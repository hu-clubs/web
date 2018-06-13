import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import List from './List';
import {fetchClubs} from '../../../store/club/actions';
import Loading from '../../loading/Loading';
import ErrorNotification from '../../error/ErrorNotification';

class ReduxList extends Component {
  componentDidMount () {
    // TODO might be better to use events and map dispatch to props
    this.props.dispatch(fetchClubs(this.props.jwt));
  }

  render () {
    const {isFetching, clubs, error} = this.props;
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-third is-offset-one-third'>
                <h1 className='title is-1'>Club List</h1>
                { isFetching ? <Loading /> : error ? <ErrorNotification title={error.title} message={error.message} /> : <List clubs={clubs} />}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReduxList.propTypes = {
  isFetching: PropTypes.bool,
  clubs: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  jwt: PropTypes.string
};

export const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.list.isFetching,
    didInvalidate: state.clubs.list.didInvalidate,
    clubs: state.clubs.list.items,
    lastUpdated: state.clubs.list.lastUpdated,
    error: state.clubs.list.error,
    jwt: state.authentication.jwt
  };
};

export default connect(
  mapStateToProps
)(ReduxList);
