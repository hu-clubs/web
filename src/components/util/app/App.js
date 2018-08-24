import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import '../../../../node_modules/bulma/css/bulma.min.css';
import registerServiceWorker from '../../../registerServiceWorker';
import {store} from '../../../store/store';
import Footer from '../footer/Footer';
import ReduxNavigation from '../navigation/ReduxNavigation';
import RouterContainer from '../router/RouterContainer';
import './App.css';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <div className='site'>
        <ReduxNavigation />
        <div className='site-content'>
          <RouterContainer />
        </div>
        <Footer />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
