# React Counter Example

This project demonstrates a simple React application with two key components: `App.js` and `Counter.js`. Here's how they work together to create a functional counter application.

## App.js - The Main Component

The `App.js` file serves as the root component of the application:

```javascript
function App() {
  return (
    <div>
      <h1>React Counter Example</h1>
      <Counter title="My Counter" />
    </div>
  );
}
```

**Key responsibilities:**
- **Layout Structure**: Provides the main application layout with a title
- **Component Import**: Imports the `Counter` component from `./Counter`
- **Props Passing**: Passes the `title` prop to the Counter component
- **Export**: Exports itself as the default export for use in `index.js`

## Counter.js - The Interactive Component

The `Counter.js` file contains the interactive counter functionality:

```javascript
function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>
      <h2>{props.title}</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
```

**Key features:**
- **State Management**: Uses `useState(0)` to manage the counter value
- **Props Reception**: Receives and displays the `title` prop from App.js
- **Event Handling**: Handles button clicks to increment/decrement the counter
- **Styling**: Applies inline styles for visual presentation

## How They Work Together

### 1. Component Hierarchy
```
App (Parent)
└── Counter (Child)
```

### 2. Data Flow
- **App.js → Counter.js**: The `title` prop flows down from App to Counter
- **Counter.js Internal**: State (`count`) is managed internally within Counter

### 3. Communication Pattern
- **Props Down**: App passes data to Counter via props
- **State Up**: Counter manages its own state (count value)
- **Events**: Counter handles its own button click events

### 4. Rendering Process
1. App renders the main title and Counter component
2. Counter receives the title prop and renders its UI
3. When buttons are clicked, Counter updates its internal state
4. React re-renders Counter with the new count value

## React Concepts Demonstrated

- **Component Composition**: App uses Counter as a child component
- **Props**: Data passed from parent (App) to child (Counter)
- **State Management**: Counter manages its own internal state using `useState`
- **Event Handling**: Button clicks trigger state updates
- **Conditional Rendering**: Display of dynamic count value

This simple example showcases the fundamental React pattern of component composition, props, and state management working together to create an interactive user interface.