import connect from 'react-redux/es/connect/connect';
import {fetchClub} from '../../../store/clubs/actions';
import WithLoading from './WithLoading';

function WithRedux (WrappedComponent, id) {
  const mapStateToProps = function (state, props) {
    let club = state.clubs.details.items[id];
    if (club) {
      return {
        club: club.data,
        isFetching: club.isFetching,
        error: club.error
      };
    } else {
      return {
        club: null,
        isFetching: true,
        error: null
      };
    }
  };

  const mapDispatchToProps = function (dispatch, props) {
    return {
      onFetch: () => {
        dispatch(fetchClub(id));
      }
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
}

export default function WithClub (id) {
  return function (WrappedComponent) {
    let ComponentWithLoading = WithLoading(WrappedComponent);
    return WithRedux(ComponentWithLoading, id);
  };
}
