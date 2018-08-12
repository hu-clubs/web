import PropTypes from 'prop-types';
import React, {Component} from 'react';
import ErrorPage from '../pages/ErrorPage';

export default class ErrorBoundary extends Component {
  constructor (props) {
    super(props);
    this.state = {hasError: false};
  }

  componentDidCatch (error, info) {
    this.setState({hasError: true});
    console.log(error);
    // TODO log to some service
  }

  render () {
    if (this.state.hasError) {
      return <ErrorPage title='Something went wrong'
        message='There was an issue trying to display that page. Try refreshing your browser.' />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.any
};
