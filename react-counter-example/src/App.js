// src/App.js
import './App.css';

import Counter from './Counter';  // Import the new component

function App() {
  return (
    <div>
      <h1>React Counter Example</h1>
      <Counter title="My Counter" />  {/* Pass prop 'title' */}
    </div>
  );
}

export default App;  // Export so it can be used in index.js
