import {connect} from 'react-redux';
import {fetchUser} from '../../../../../store/user/actions';
import LoadingUserInformation from './LoadingUserInformation';

export const mapStateToProps = function (state, props) {
  // TODO this is a little hacky
  let user = state.users.details.items[props.id];
  if (user) {
    return {
      user: state.users.details.items[props.id].data,
      isFetching: state.users.details.items[props.id].isFetching,
      error: state.users.details.items[props.id].error
    };
  } else {
    return {
      user: null,
      isFetching: true,
      error: null
    };
  }
};

const mapDispatchToProps = function (dispatch, props) {
  return {
    onFetchClub: () => {
      dispatch(fetchUser(props.id));
    }
  };
};

let ReduxUserInformation = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingUserInformation);

export default ReduxUserInformation;
