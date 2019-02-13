import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Hooks Demo</h1>
        </header>

        <main>
          <div>
            <h2>Add user</h2>
          </div>

          <div>
            <h2>View users</h2>
          </div>
        </main>

        <footer>
          End of the demo
        </footer>
      </div>
    );
  }
}

export default App;
