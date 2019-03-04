import React, { Component } from 'react';

import ToolBar from './Components/ToolBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ToolBar />

        <header className='App-header'>
          <p>
            Hello Course.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
