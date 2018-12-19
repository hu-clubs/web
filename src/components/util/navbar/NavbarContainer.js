import {connect} from 'react-redux';
import {removeJwt} from '../../../store/authentication/jwt/actions';
import Navbar from './Navbar';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';

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

let enhance = compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

export default enhance(Navbar);
