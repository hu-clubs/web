import {connect} from 'react-redux';
import {compose} from 'redux';
import {requestDeleteClub} from '../../../../store/features/clubs/delete/actions';
import {fetchClubDetails} from '../../../../store/features/clubs/read/actions';
import WithLoading from '../../../util/hoc/WithLoading';
import WithRequest from '../../../util/hoc/WithRequest';
import DeleteClub from './DeleteClub';
import {withRouter} from 'react-router-dom';

const loadingMapStateToProps = function (state, props) {
  let {clubId} = props;
  let club = state.clubs.read.items[clubId];
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

const loadingMapDispatchToProps = function (dispatch, props) {
  let {clubId} = props;
  return {
    onFetch: () => {
      dispatch(fetchClubDetails(clubId));
    },
    onRequest: () => {
      dispatch(requestDeleteClub(clubId));
    }
  };
};

const requestMapStateToProps = function (state) {
  return state.clubs.delete;
};

const requestMapDispatchToProps = function (dispatch, props) {
  let {clubId} = props;
  return {
    onRequest: () => {
      dispatch(requestDeleteClub(clubId));
    }
  };
};

const enhance = compose(
  connect(
    loadingMapStateToProps,
    loadingMapDispatchToProps
  ),
  WithLoading,
  connect(
    requestMapStateToProps,
    requestMapDispatchToProps
  ),
  WithRequest,
  withRouter
);

export default enhance(DeleteClub);
