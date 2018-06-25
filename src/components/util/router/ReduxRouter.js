import { connect } from 'react-redux';
import Router from './Router';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.authentication.authentication.isLoggedIn,
    ...ownProps
  };
};

const ReduxRouter = withRouter(connect(
  mapStateToProps
)(Router));

export default ReduxRouter;
