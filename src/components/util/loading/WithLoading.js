import React from 'react';
import Loading from '../../shared/loading/Loading';
import ErrorNotification from '../../shared/error/ErrorNotification';
import PropTypes from 'prop-types';

function WithLoading (WrappedComponent) {
  let WithLoadingComponent = function ({ isFetching, error = true, ...props }) {
    return (
      isFetching
        ? <Loading /> : error
          ? <ErrorNotification title={error.name} message={error.message} />
          : <WrappedComponent {...props} />
    );
  };

  WithLoadingComponent.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.object
  };

  return WithLoadingComponent;
}

export default WithLoading;
