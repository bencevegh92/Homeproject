import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';

import Babysitter from './Container/Babysitter/Babysitter';


class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className='App'>
          <Babysitter />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
