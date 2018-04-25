import React, {Component} from 'react';
import Navigation from '../navigation/Navigation';
import Router from '../Router';
import Footer from '../footer/Footer';
import './App.css';
import '../../../node_modules/bulma/css/bulma.min.css';

class App extends Component {
  render () {
    return (
      <div>
        <Navigation />
        <Router />
        <Footer />
      </div>
    );
  }
}

export default App;
