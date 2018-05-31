import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Error.css';

class Error extends Component {
  render () {
    return (
      <div className='error notification is-danger'>
        {this.props.title && <h2 className='error--title'>{this.props.title}</h2>}
        {this.props.message && (<p className='error--message'>{this.props.message}</p>)}<br />
        {this.props.retry || <button className='button is-danger is-inverted is-fullwidth'>Retry</button>}
      </div>
    );
  }
}

Error.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  retry: PropTypes.bool
};

export default Error;
