import {store} from '../store/store';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import Footer from './util/footer/Footer';
import {NavbarContainer} from './util/navbar/NavbarContainer';
import {RootRouterContaner} from './util/router/RootRouterContainer';
import {PersistGate} from 'redux-persist/integration/react';
import './App.css';
import LoadingIndicator from './fragments/loadingIndicator/LoadingIndicator';
import {persistor} from '../store/persistance/persistedStore';

export function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingIndicator />} persistor={persistor}>
        <HashRouter>
          <div className='site'>
            <NavbarContainer />
            <div className='site-content'>
              <RootRouterContaner />
            </div>
            <Footer />
          </div>
        </HashRouter>
      </PersistGate>
    </Provider>
  );
}
