import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ErrorNotification from '../../fragments/errorNotification/ErrorNotification';
import LoadingIndicator from '../../fragments/loadingIndicator/LoadingIndicator';

export default function WithLoading (WrappedComponent) {
  return class extends Component {
    static propTypes = {
      isFetching: PropTypes.bool.isRequired,
      error: PropTypes.object,
      onFetch: PropTypes.func
    };

    componentDidMount () {
      if (this.props.onFetch) {
        this.props.onFetch();
      }
    }

    render () {
      return (
        this.props.isFetching
          ? <LoadingIndicator /> : this.props.error
            ? <ErrorNotification title={this.props.error.name} message={this.props.error.message} />
            : <WrappedComponent {...this.props} />
      );
    }
  };
}
