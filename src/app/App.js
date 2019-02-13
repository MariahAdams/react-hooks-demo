import React, { Component } from 'react';
import Counter from '../demo/Counter';
import Party from '../demo/Party';
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
            <Party />
        </main>

        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
