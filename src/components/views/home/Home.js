import React, {Component} from 'react';
import './Home.css';

class Home extends Component {
  render () {
    return (
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
              Herd
            </h1>
            <h2 className='subtitle'>
              Make social clubs easier
            </h2>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
