import {connect} from 'react-redux';
import {deleteClub, fetchClub} from '../../../../store/club/actions';
import LoadingDeleteClub from './LoadingDeleteClub';

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
    },
    onDelete: () => {
      dispatch(deleteClub(props.id));
    }
  };
};

let ReduxDeleteClub = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingDeleteClub);

export default ReduxDeleteClub;
