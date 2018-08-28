import React, {Component} from 'react';
import WideLayout from '../../../util/layout/WideLayout';
import ClubDetailsContainer from './ClubDetailsContainer';

export default class ClubDetailsView extends Component {
  render () {
    return (
      <WideLayout>
        <ClubDetailsContainer />
      </WideLayout>
    );
  }
}
