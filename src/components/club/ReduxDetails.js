import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Details from './Details';

export const mapStateToProps = function (state, props) {
  return {
    club: state.clubs.list.items[props.match.params.id]
  };
};

const ReduxDetails = connect(
  mapStateToProps
)(Details);

ReduxDetails.propTypes = {
  match: PropTypes.object.isRequired
};

export default ReduxDetails;
