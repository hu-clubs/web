import {connect} from 'react-redux';
import {compose} from 'redux';
import {fetchClubList} from '../../../../store/clubs/read/actions';
import WithLoading from '../../../util/hoc/WithLoading';
import LoadingClubList from './ClubList';

export const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.read.isFetching,
    clubs: state.clubs.read.items,
    error: state.clubs.read.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onFetch: () => {
      dispatch(fetchClubList());
    }
  };
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithLoading
);

export default enhance(LoadingClubList);