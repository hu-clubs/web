import React, {Component} from 'react';
import NarrowLayout from '../../../util/layout/NarrowLayout';
import RegisterFormContainer from './RegisterFormContainer';

export default class LoginView extends Component {
  render () {
    return (
      <NarrowLayout>
        <RegisterFormContainer />
      </NarrowLayout>
    );
  }
}
