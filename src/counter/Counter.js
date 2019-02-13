import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };


  render() {
    return (
      <div>
        {/* this is a comment in React */}
        <h2>{this.state.count}</h2>

        <button onClick={this.setCount}>Count up to the moon</button>
      </div>
    )
  }
}

export default Counter;