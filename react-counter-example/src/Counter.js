// src/Counter.js
import { useState } from 'react';  // Import useState hook

function Counter(props) {
  // State: 'count' starts at 0, setCount updates it
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h2>{props.title}</h2>  {/* Prop: title passed from parent */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>  {/* Event handler */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default Counter;
