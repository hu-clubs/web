import * as classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Form, Text} from 'react-form';
import {validateClubName, validateClubShortName} from '../../../../validators';
import ErrorNotification from '../../../fragments/misc/errorNotification/ErrorNotification';
import {Redirect} from 'react-router-dom';

export default class CreateClub extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hasBeenSubmitted: false
    };
  }

  submit (values) {
    this.props.onSubmit(values);
    this.setState({
      hasBeenSubmitted: true
    });
  }

  render () {
    if (this.state.hasBeenSubmitted && !this.props.isFetching && !this.props.error) {
      return (<Redirect to='/club/list' />);
    }
    return (
      <div>
        <section className='section'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-one-third is-offset-one-third'>
                <h1 className='title is-1'>Create Club</h1>
                {!this.props.isFetching && this.props.error && <ErrorNotification title={this.props.error.name} message={this.props.error.message} stack={this.props.error.stack} />}
                <Form onSubmit={(values) => this.submit(values)}>
                  {formApi => (
                    <form onSubmit={formApi.submitForm}>
                      <div className='field'>
                        <label className='label'>Name</label>
                        <div className='control'>
                          <Text
                            className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.name})}
                            field='name'
                            validate={validateClubName} />
                        </div>
                        {formApi.errors && (<p className='help is-danger'>{formApi.errors.name}</p>)}
                      </div>
                      <div className='field'>
                        <label className='label'>Short Name</label>
                        <div className='control'>
                          <Text
                            className={classNames({input: true, 'is-danger': formApi.errors && formApi.errors.shortName})}
                            field='shortName'
                            validate={validateClubShortName} />
                        </div>
                        {formApi.errors && (<p className='help is-danger'>{formApi.errors.shortName}</p>)}
                      </div>
                      <div className='field is-grouped'>
                        <p className='control'>
                          <button className='button is-primary'>Submit</button>
                        </p>
                        <p className='control'>
                          <a className='button is-danger' onClick={this.props.history.goBack}>Cancel</a>
                        </p>
                      </div>
                    </form>
                  )}
                </Form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

CreateClub.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
  isFetching: PropTypes.bool,
  history: PropTypes.object
};
