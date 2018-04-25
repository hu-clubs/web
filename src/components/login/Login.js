import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit () {
    // make http request
  }

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <h1 className='title is-1'>Login</h1>
              <form>
                <div className='field'>
                  <label className='label'>Harding Email</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='jdoe@harding.edu' />
                  </div>
                  <p className='help is-danger'>This isn't a Harding email address</p>
                  <p className='help is-danger'>This email hasn't been registered</p>
                </div>
                <div className='field'>
                  <label className='label'>Password</label>
                  <div className='control'>
                    <input className='input' type='password' />
                  </div>
                  <p className='help is-danger'>Invalid password</p>
                </div>
                <div className='field'>
                  <div className='control'>
                    <button className='button is-link'>Submit</button>
                  </div>
                </div>
                <div className='field is-grouped'>
                  <div className='control'>
                    <Link className='button is-text' to='/register'>Don't have an account?</Link>
                  </div>
                  <div className='control'>
                    <Link className='button is-text' to='/login/help'>Trouble logging in?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
