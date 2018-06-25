import {connect} from 'react-redux';
import LoadingDetails from './LoadingDetails';
import {fetchClubs} from '../../../../store/club/actions';

const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.list.isFetching,
    didInvalidate: state.clubs.list.didInvalidate,
    clubs: state.clubs.list.items,
    lastUpdated: state.clubs.list.lastUpdated,
    error: state.clubs.list.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onFetchClubs: () => {
      dispatch(fetchClubs());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingDetails);
