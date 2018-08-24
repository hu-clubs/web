import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Form, Text} from 'react-form';
import {Link, Redirect} from 'react-router-dom';
import {
  validateEmail,
  validateFirstName,
  validateHNumber,
  validateLastName,
  validatePassword,
  validateRegister
} from '../../../../validators';
import ErrorNotification from '../../../fragments/errorNotification/ErrorNotification';

class Register extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasBeenSubmitted: false
    };
  }

  submit (values) {
    this.setState({
      hasBeenSubmitted: true
    });
    this.props.onSubmit(values);
  }

  render () {
    if (this.state.hasBeenSubmitted && !this.props.isFetching && !this.props.error) {
      return (<Redirect to='/' />);
    }
    return (
      <section className='section'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-third is-offset-one-third'>
              <h1 className='title is-1'>Register</h1>
              {!this.props.isFetching && this.props.error && <ErrorNotification title={this.props.error.name} message={this.props.error.message} stack={this.props.error.stack} />}
              <Form onSubmit={(values) => this.submit(values)}
                validate={validateRegister}>
                {formApi => (
                  <form onSubmit={formApi.submitForm}>
                    <div className='field'>
                      <label className='label'>First Name</label>
                      <div className='control'>
                        <Text
                          className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.firstName})}
                          field='firstName'
                          validate={validateFirstName}
                          autoComplete='given-name' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.firstName}</p>)}
                    </div>
                    <div className='field'>
                      <label className='label'>Last Name</label>
                      <div className='control'>
                        <Text
                          className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.lastName})}
                          field='lastName'
                          validate={validateLastName}
                          autoComplete='family-name' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.lastName}</p>)}
                    </div>
                    <div className='field'>
                      <label className='label'>Harding Email</label>
                      <div className='control'>
                        <Text
                          className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.email})}
                          field='email'
                          validate={validateEmail}
                          autoComplete='email' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.email}</p>)}
                    </div>
                    <div className='field'>
                      <label className='label'>Harding ID Number</label>
                      <div className='control'>
                        <Text
                          className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.hNumber})}
                          field='hNumber'
                          validate={validateHNumber} />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.hNumber}</p>)}
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
                          validate={validatePassword}
                          autoComplete='new-password' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.password}</p>)}
                    </div>
                    <div className='field'>
                      <label className='label'>Confirm Password</label>
                      <div className='control'>
                        <Text
                          className={classNames({
                            input: true,
                            'is-danger': formApi.errors && formApi.errors.confirmPassword
                          })}
                          type='password'
                          field='confirmPassword'
                          autoComplete='new-password' />
                      </div>
                      {formApi.errors && (<p className='help is-danger'>{formApi.errors.confirmPassword}</p>)}
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
                )}
              </Form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool
};

export default Register;
