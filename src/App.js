import React, { Component } from 'react';

import './App.scss';

import Welcome from './Container/Welcome/Welcome';

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Welcome />
      </div>
    );
  }
}

export default App;
