import React, { useState } from 'react';

function Counter() {
  //first variable is the value (~this.state)
  //second variable is the function to update that value (~this.setState)
  //The useState argument is the initial state value --> 0 
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Count to the moon</button>
    </div>
  )
}

export default Counter;