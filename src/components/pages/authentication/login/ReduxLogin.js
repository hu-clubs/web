import {connect} from 'react-redux';
import {login} from '../../../../store/authentication/actions';
import Login from './Login';

const mapStateToProps = function (state) {
  return {
    isFetching: state.authentication.jwt.isFetching,
    error: state.authentication.jwt.error
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
