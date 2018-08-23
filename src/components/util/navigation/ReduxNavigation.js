import {connect} from 'react-redux';
import {removeJwt} from '../../../store/authentication/jwt/actions';
import Navigation from './Navigation';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.jwt.token !== null,
    ...state.authentication.jwt.decoded
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLogout: () => {
      dispatch(removeJwt());
    }
  };
};

const ReduxNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default ReduxNavigation;
