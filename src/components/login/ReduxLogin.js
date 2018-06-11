import { connect } from 'react-redux';
import Login from './Login';
import {login} from '../../store/authentication/actions';

export const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: (values, e, formApi) => {
      dispatch(login(values.email, values.password));
    }
  };
};

const ReduxLogin = connect(
  null,
  mapDispatchToProps
)(Login);

export default ReduxLogin;
