import {connect} from 'react-redux';
import {removeJwt} from '../../../store/authentication/jwt/actions';
import Navigation from './Navigation';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.jwt.isLoggedIn,
    firstName: state.authentication.jwt.firstName,
    lastName: state.authentication.jwt.lastName,
    id: state.authentication.jwt.id
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
