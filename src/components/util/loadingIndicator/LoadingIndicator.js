import {faSpinner} from '@fortawesome/fontawesome-pro-regular';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import React, {Component} from 'react';

class LoadingIndicator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount () {
    // TODO remove this timeout to avoid memory leak
    setTimeout(function () {
      this.setState({render: true});
    }.bind(this), 250);
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
