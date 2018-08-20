import {connect} from 'react-redux';
import {requestCreateUser} from '../../../../store/users/create/actions';
import Register from './Register';

const mapStateToProps = function (state) {
  return {
    isFetching: state.users.create.isFetching,
    error: state.users.create.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: (values, e, formApi) => {
      dispatch(requestCreateUser(values.firstName, values.lastName, values.email, values.hNumber, values.password, true));
    }
  };
};

const ReduxLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default ReduxLogin;
