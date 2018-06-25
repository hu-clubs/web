import { connect } from 'react-redux';
import Navigation from './Navigation';
import {logout} from '../../../store/authentication/actions';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.authentication.isLoggedIn
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLogout: () => {
      dispatch(logout());
    }
  };
};

const ReduxNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default ReduxNavigation;
