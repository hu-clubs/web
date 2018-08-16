import PropTypes from 'prop-types';
import React from 'react';
import ErrorNotification from '../errorNotification/ErrorNotification';
import LoadingIndicator from '../loadingIndicator/LoadingIndicator';

function WithLoading (WrappedComponent) {
  let ComponentWithLoading = function ({ isFetching, error = true, ...props }) {
    return (
      isFetching
        ? <LoadingIndicator /> : error
          ? <ErrorNotification title={error.name} message={error.message} />
          : <WrappedComponent {...props} />
    );
  };

  ComponentWithLoading.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.object
  };

  return ComponentWithLoading;
}

export default WithLoading;
