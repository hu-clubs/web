import React, {Component} from 'react';
import './LoginHelp.css';

class LoginHelp extends Component {
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <div className='content'>
                <h1 className='title is-1 login-help-title'>Login Help</h1>

                <h2 className='subtitle is-5'>I don't remember the email I registered with</h2>
                <p>Your email address to login should be the same a your Harding email address (i.e. it ends with
                  @harding.edu).</p>

                <h2 className='subtitle is-5'>I don't remember my password</h2>
                <p>You can reset your password here</p>
                {/* TODO add a password reset page */}

                <h2 className='subtitle is-5'>I'm having another issue not mentioned above</h2>
                <p>No problem. Just contact me and I can help you out. My email is <a
                  href='mailto:shepherdjerred@gmail.com'>shepherdjerred@gmail.com</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default LoginHelp;
