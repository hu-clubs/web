import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchClubs} from '../../store/club/actions';
import Loading from '../loading/Loading';
import Error from '../error/Error';
import Details from '../club/Details';

class ReduxDetails extends Component {
  componentDidMount () {
    // TODO might be better to use events and map dispatch to props
    this.props.dispatch(fetchClubs());
  }

  render () {
    const {isFetching, clubs, error, match} = this.props;
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-third is-offset-one-third'>
                { isFetching ? <React.Fragment><h1 className='title is-1'>Club Details</h1><Loading /></React.Fragment> : error ? <Error title={error.message} message={error.stack} /> : <Details club={clubs[match.params.id]} />}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

ReduxDetails.propTypes = {
  isFetching: PropTypes.bool,
  clubs: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object,
  match: PropTypes.object.isRequired
};

export const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.list.isFetching,
    didInvalidate: state.clubs.list.didInvalidate,
    clubs: state.clubs.list.items,
    lastUpdated: state.clubs.list.lastUpdated,
    error: state.clubs.list.error
  };
};

export default connect(
  mapStateToProps
)(ReduxDetails);
