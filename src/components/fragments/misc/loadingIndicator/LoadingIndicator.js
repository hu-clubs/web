import {faSpinner} from '@fortawesome/fontawesome-pro-regular';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class LoadingIndicator extends Component {
  state = {
    render: false,
    timeoutId: null
  };

  static propTypes = {
    delay: PropTypes.number
  };

  static defaultProps = {
    delay: 250
  };

  componentDidMount () {
    let timeoutId = setTimeout(function () {
      this.setState({
        render: true
      });
    }.bind(this), this.props.delay);

    this.setState({
      timeoutId
    });
  }

  componentWillUnmount () {
    clearTimeout(this.state.timeoutId);
  }

  render () {
    return this.state.render && (
      <div>
        <FontAwesomeIcon icon={faSpinner} className='fa-spin fa-2x' />
      </div>
    );
  }
}

export default LoadingIndicator;
