import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './ConfirmationPage.css';

export default class ConfirmationPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasBeenSubmitted: false
    };
  }

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <article className='message is-primary'>
                <div className='message-header'>
                  <p>{this.props.title}</p>
                </div>
                <div className='message-body'>
                  <p className='confirmation-message'>
                    {this.props.message}
                  </p>
                  <nav className='level'>
                    <div className='level-left' />
                    <div className='level-right'>
                      <div className='buttons'>
                        <a className='button is-danger' onClick={this.props.onConfirm}>Delete</a>
                        <a className='button' onClick={this.props.onCancel}>Cancel</a>
                      </div>
                    </div>
                  </nav>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ConfirmationPage.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func
};
