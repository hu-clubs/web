import {connect} from 'react-redux';
import {createClub} from '../../../../store/club/actions';
import CreateClub from './CreateClub';

const mapStateToProps = function (state) {
  return {
    isFetching: state.clubs.create.isFetching,
    error: state.clubs.create.error
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onSubmit: (values, e, formApi) => {
      dispatch(createClub(values.name, values.shortName));
    }
  };
};

const ReduxCreateClub = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateClub);

export default ReduxCreateClub;
