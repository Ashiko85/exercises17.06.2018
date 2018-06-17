import React, { Component } from 'react';
import './App.css';
import Counter from './Components/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My new APP</h1>
        </header>
          <Counter />
      </div>
    );
  }
}

export default App;
j