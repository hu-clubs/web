import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import RootRouter from './RootRouter';

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.authentication.jwt.token !== null
  };
};

export default withRouter(connect(
  mapStateToProps
)(RootRouter));
