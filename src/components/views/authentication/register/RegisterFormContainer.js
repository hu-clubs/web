import {connect} from 'react-redux';
import {requestCreateUser} from '../../../../store/features/users/create/actions';
import RegisterForm from './RegisterForm';

const mapStateToProps = function (state) {
  return {
    isRequesting: state.users.create.isFetching,
    error: state.users.create.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onRequest: (values, e, formApi) => {
      dispatch(requestCreateUser(values.firstName, values.lastName, values.email, values.hNumber, values.password, true));
    }
  };
};

const ReduxLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterForm);

export default ReduxLogin;
