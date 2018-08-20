import {connect} from 'react-redux';
import {editClub, fetchClub} from '../../../../store/club/actions';
import LoadingEditClub from './LoadingEditClub';

export const mapStateToProps = function (state, props) {
  // TODO this is a little hacky
  let club = state.clubs.details.items[props.id];
  if (club) {
    return {
      club: state.clubs.details.items[props.id].data,
      isFetching: state.clubs.details.items[props.id].isFetching,
      error: state.clubs.details.items[props.id].error,
      isEditFetching: state.clubs.edit.isFetching,
      isEditError: state.clubs.edit.error
    };
  } else {
    return {
      club: null,
      isFetching: true,
      error: null,
      isEditFetching: false,
      isEditError: null
    };
  }
};

const mapDispatchToProps = function (dispatch, props) {
  return {
    onFetchClub: () => {
      dispatch(fetchClub(props.id));
    },
    onSave: (club) => {
      dispatch(editClub(club));
    }
  };
};

let ReduxEditClub = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingEditClub);

export default ReduxEditClub;
