import { connect } from 'react-redux';
import Login from './Login';
import {login} from '../../../../store/authentication/actions';

const mapStateToProps = function (state) {
  return {
    isFetching: state.authentication.authentication.isFetching,
    error: state.authentication.authentication.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: (values, e, formApi) => {
      dispatch(login(values.email, values.password));
    }
  };
};

const ReduxLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default ReduxLogin;
