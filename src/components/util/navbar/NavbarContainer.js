import {connect} from 'react-redux';
import {removeJwt} from '../../../store/features/authentication/user/actions';
import Navbar from './Navbar';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authentication.user.token.jwt !== null,
    ...state.authentication.user.token.decoded
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onLogout: () => {
      dispatch(removeJwt());
    }
  };
};

let enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export const NavbarContainer = enhance(Navbar);
