import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/fontawesome-pro-regular';

class Loading extends Component {
  render () {
    return (
      <div>
        <FontAwesomeIcon icon={faSpinner} className='fa-spin fa-2x' />
      </div>
    );
  }
}

export default Loading;
