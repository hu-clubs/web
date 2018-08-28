import {connect} from 'react-redux';
import {compose} from 'redux';
import {fetchClubDetails} from '../../../../store/clubs/read/actions';
import WithLoading from '../../../util/hoc/WithLoading';
import ClubDetails from './ClubDetails';

const mapStateToProps = function (state, ownProps) {
  let club = state.clubs.read.items[ownProps.clubId];
  if (club) {
    return {
      club: club.data,
      isFetching: club.isFetching,
      error: club.error
    };
  } else {
    return {
      club: null,
      isFetching: true,
      error: false
    };
  }
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    onFetch: () => {
      dispatch(fetchClubDetails(ownProps.clubId));
    }
  };
};

let enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  WithLoading
);

export default enhance(ClubDetails);
