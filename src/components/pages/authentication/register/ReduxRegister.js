import { connect } from 'react-redux';
import Register from './Register';
import {register} from '../../../../store/authentication/actions';

const mapStateToProps = function (state) {
  return {
    isFetching: state.authentication.authentication.isFetching,
    error: state.authentication.authentication.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: (values, e, formApi) => {
      dispatch(register(values.email, values.password));
    }
  };
};

const ReduxLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

export default ReduxLogin;
