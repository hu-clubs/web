import {connect} from 'react-redux';
import {fetchClub} from '../../../../../store/club/actions';
import LoadingClubMeetings from './LoadingClubMeetings';

export const mapStateToProps = function (state, props) {
  // TODO this is a little hacky
  let club = state.clubs.details.items[props.id];
  if (club) {
    return {
      club: state.clubs.details.items[props.id].data,
      isFetching: state.clubs.details.items[props.id].isFetching,
      error: state.clubs.details.items[props.id].error
    };
  } else {
    return {
      club: null,
      isFetching: true,
      error: null
    };
  }
};

const mapDispatchToProps = function (dispatch, props) {
  return {
    onFetchClub: () => {
      dispatch(fetchClub(props.id));
    }
  };
};

let ReduxClubMeetings = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingClubMeetings);

export default ReduxClubMeetings;
