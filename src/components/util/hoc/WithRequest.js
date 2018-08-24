import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ErrorNotification from '../../fragments/errorNotification/ErrorNotification';

export default function WithRequest (WrappedComponent) {
  return class extends Component {
    static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.object,
      onRequest: PropTypes.func
    };

    render () {
      let {isFetching, error} = this.props;
      return (
        <Fragment>
          {!isFetching && error && <ErrorNotification title={error.name} message={error.message} />}
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
}
