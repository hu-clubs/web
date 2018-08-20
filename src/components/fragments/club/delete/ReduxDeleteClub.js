import {connect} from 'react-redux';
import {requestDeleteClub} from '../../../../store/clubs/delete/actions';
import {fetchClubDetails} from '../../../../store/clubs/read/actions';
import LoadingDeleteClub from './LoadingDeleteClub';

export const mapStateToProps = function (state, props) {
  // TODO this is a little hacky
  let club = state.clubs.read.items[props.id];
  if (club) {
    return {
      club: state.clubs.read.items[props.id].data,
      isFetching: state.clubs.read.items[props.id].isFetching,
      error: state.clubs.read.items[props.id].error
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
      dispatch(fetchClubDetails(props.id));
    },
    onDelete: () => {
      dispatch(requestDeleteClub(props.id));
    }
  };
};

let ReduxDeleteClub = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingDeleteClub);

export default ReduxDeleteClub;
