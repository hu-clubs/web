import {connect} from 'react-redux';
import {requestUpdateClub} from '../../../../store/clubs/update/actions';
import {fetchClubDetails} from '../../../../store/clubs/read/actions';
import LoadingEditClub from './LoadingEditClub';

export const mapStateToProps = function (state, props) {
  // TODO this is a little hacky
  let club = state.clubs.read.items[props.id];
  if (club) {
    return {
      club: state.clubs.read.items[props.id].data,
      isFetching: state.clubs.read.items[props.id].isFetching,
      error: state.clubs.read.items[props.id].error,
      isEditFetching: state.clubs.update.isFetching,
      isEditError: state.clubs.update.error
    };
  } else {
    return {
      club: null,
      isFetching: true,
      error: false,
      isEditFetching: false,
      isEditError: null
    };
  }
};

const mapDispatchToProps = function (dispatch, props) {
  return {
    onFetchClub: () => {
      dispatch(fetchClubDetails(props.id));
    },
    onSave: (club) => {
      dispatch(requestUpdateClub(club));
    }
  };
};

let EditClubContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingEditClub);

export default EditClubContainer;
