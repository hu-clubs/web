import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import ReduxRouter from '../router/ReduxRouter';
import Footer from '../footer/Footer';
import '../../../node_modules/bulma/css/bulma.min.css';
import ReduxNavigation from '../navigation/ReduxNavigation';
import registerServiceWorker from '../../registerServiceWorker';
import {store} from '../../store/store';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <div>
        <ReduxNavigation />
        <ReduxRouter />
        <Footer />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
