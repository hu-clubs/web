import {connect} from 'react-redux';
import {createClub} from '../../../../store/features/clubs/actions';
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

const CreateClubContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateClub);

export default CreateClubContainer;
