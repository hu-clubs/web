import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import '../node_modules/bulma/css/bulma.min.css';
import registerServiceWorker from './registerServiceWorker';
import {store} from './store/store';
import Footer from './components/util/footer/Footer';
import NavbarContainer from './components/util/navbar/NavbarContainer';
import RouterContainer from './components/util/router/RootRouterContainer';
import './index.css';

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <div className='site'>
        <NavbarContainer />
        <div className='site-content'>
          <RouterContainer />
        </div>
        <Footer />
      </div>
    </HashRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
