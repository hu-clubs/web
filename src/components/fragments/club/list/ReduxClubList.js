import {connect} from 'react-redux';
import {fetchClubs} from '../../../../store/clubs/actions';
import LoadingClubList from './LoadingClubList';

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
)(LoadingClubList);
