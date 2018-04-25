import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component {
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <h1 className='title is-1'>Register</h1>
              <form>
                <div className='field'>
                  <label className='label'>First Name</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='John' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Last Name</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='Doe' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Harding Email</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='jdoe@harding.edu' />
                  </div>
                  <p className='help is-danger'>This isn't a Harding email address</p>
                  <p className='help is-danger'>This email has already been registered</p>
                </div>
                <div className='field'>
                  <label className='label'>Harding ID Number</label>
                  <div className='control'>
                    <input className='input' type='text' placeholder='H01234567' />
                  </div>
                  <p className='help is-danger'>This isn't a valid ID number</p>
                  <p className='help is-danger'>This ID number has already been registered</p>
                </div>
                <div className='field'>
                  <label className='label'>Password</label>
                  <div className='control'>
                    <input className='input' type='password' />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Confirm Password</label>
                  <div className='control'>
                    <input className='input' type='password' />
                  </div>
                  <p className='help is-danger'>Your passwords don't match</p>
                </div>
                <div className='field'>
                  <div className='control'>
                    <button className='button is-link'>Submit</button>
                  </div>
                </div>
                <div className='field is-grouped'>
                  <div className='control'>
                    <Link className='button is-text' to='/login'>Already have an account?</Link>
                  </div>
                  <div className='control'>
                    <Link className='button is-text' to='/register/help'>Trouble registering?</Link>
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

export default Register;
