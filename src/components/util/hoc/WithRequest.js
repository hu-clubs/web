import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ErrorNotification from '../../fragments/errorNotification/ErrorNotification';

function getDisplayName (WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'WithRequest';
}

export default function WithRequest (WrappedComponent) {
  return class WithRequest extends Component {
    static propTypes = {
      isRequesting: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
      ]).isRequired,
      onRequest: PropTypes.func
    };

    displayName = getDisplayName(WrappedComponent);

    render () {
      let {isRequesting, error} = this.props;
      return (
        <Fragment>
          {!isRequesting && error && <ErrorNotification title={error.name} message={error.message} />}
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  };
}
