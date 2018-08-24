import {connect} from 'react-redux';
import {login} from '../../../../store/authentication/login/actions';
import Login from './Login';

const mapStateToProps = function (state) {
  return {
    isFetching: state.authentication.login.isFetching,
    error: state.authentication.login.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: (values, e, formApi) => {
      dispatch(login(values.email, values.password));
    }
  };
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
