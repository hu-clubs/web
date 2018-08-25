import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';
import ErrorNotification from '../../fragments/errorNotification/ErrorNotification';

export default function WithRequest (WrappedComponent, reduxKey) {
  return class extends Component {
    static propTypes = {
      isRequesting: PropTypes.bool.isRequired,
      error: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool
      ]).isRequired,
      onRequest: PropTypes.func
    };

    render () {
      let {isRequesting, error, ...props} = this.props;
      return (
        <Fragment>
          {!isRequesting && error && <ErrorNotification title={error.name} message={error.message} />}
          <WrappedComponent {...props} />
        </Fragment>
      );
    }
  };
}
