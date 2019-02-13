import React, { Component } from 'react';
import Counter from '../counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Hooks Demo</h1>
        </header>

        <main>
          <Counter />
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
