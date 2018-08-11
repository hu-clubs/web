import {connect} from 'react-redux';
import Details from './Details';
import {fetchClub} from '../../../../store/club/actions';

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
      dispatch(fetchClub('5ae489eb10837f2d52f61b9e'));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
