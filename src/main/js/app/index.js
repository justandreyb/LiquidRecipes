import React, { Component } from 'react';

import Navigation from './navigation';
import Footer from './footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
