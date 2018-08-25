import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Router from './Router';

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.authentication.jwt.token !== null
  };
};

export default withRouter(connect(
  mapStateToProps
)(Router));
