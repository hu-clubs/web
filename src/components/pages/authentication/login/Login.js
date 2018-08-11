import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, Text} from 'react-form';
import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import ErrorNotification from '../../../shared/error/ErrorNotification';

class Login extends Component {
  validateEmail = value => {
    let error;
    if (!value) error = 'You must enter an email address';
    if (!/[a-zA-Z0-9]+@harding.edu/.test(value)) error = 'You must enter a Harding email address';
    return error;
  };

  validatePassword = value => {
    let error;
    if (!value) error = 'You must enter a password';
    return error;
  };

  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <h1 className='title is-1'>Login</h1>
              {!this.props.isFetching && this.props.error && <ErrorNotification title={this.props.error.name} message={this.props.error.message} stack={this.props.error.stack} />}
              <Form onSubmit={this.props.onSubmit}
                defaultValues={{email: 'jshepherd@harding.edu', password: 'mypassword'}}>
                {formApi => (
                  <form onSubmit={formApi.submitForm}>
                    <div className='field'>
                      <label className='label'>Harding Email</label>
                      <div className='control'>
                        <Text
                          className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.email})}
                          field='email'
                          validate={this.validateEmail}
                          autoComplete='username' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.email}</p>)}
                    </div>
                    <div className='field'>
                      <label className='label'>Password</label>
                      <div className='control'>
                        <Text
                          className={classNames({
                            input: true,
                            'is-danger': formApi.errors && formApi.errors.password
                          })}
                          type='password'
                          field='password'
                          validate={this.validatePassword}
                          autoComplete='password' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.password}</p>)}
                    </div>
                    <div className='field'>
                      <div className='control'>
                        <button className='button is-link'>Submit</button>
                      </div>
                    </div>
                    <div className='field is-grouped'>
                      <div className='control'>
                        <Link className='button is-text'
                          to='/register'>Don't have an account?</Link>
                      </div>
                      <div className='control'>
                        <Link className='button is-text'
                          to='/login/help'>Trouble logging in?</Link>
                      </div>
                    </div>
                  </form>
                )}
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool
};

export default Login;
