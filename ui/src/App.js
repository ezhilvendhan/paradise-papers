import React, { Component } from 'react';
import './App.css';
import EntityVis from './EntityVis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Paradise Papers</h1>
        </header>
        
        <EntityVis />
      </div>
    );
  }
}

export default App;
