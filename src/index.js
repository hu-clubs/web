import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/App';
import {HashRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/store';
import {Provider} from 'react-redux';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
