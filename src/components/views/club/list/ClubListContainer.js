import {connect} from 'react-redux';
import {fetchClubList} from '../../../../store/clubs/read/actions';
import LoadingClubList from './LoadingClubList';

export const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.read.isFetching,
    clubs: state.clubs.read.items,
    error: state.clubs.read.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onFetchClubs: () => {
      dispatch(fetchClubList());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingClubList);
