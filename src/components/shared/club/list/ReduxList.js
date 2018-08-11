import {connect} from 'react-redux';
import LoadingList from './LoadingList';
import {fetchClubs} from '../../../../store/club/actions';

export const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.list.isFetching,
    clubs: state.clubs.list.items,
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
)(LoadingList);
