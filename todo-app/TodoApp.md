# 📝 TodoApp.js - How It Works

## 🎯 What It Does
A simple to-do list where you can:

- ✅ Add new tasks
- ❌ Delete tasks  
- 🔄 Mark tasks as complete/incomplete

---

## 🧠 The Brain (State)

```js
const [todos, setTodos] = useState([]); // 📦 List of all todos
const [inputValue, setInputValue] = useState(''); // ✏️ What you're typing
```

---

## 🔧 The Functions

### ➕ `addTodo()`
- Checks if input isn't empty
- Creates new todo with unique ID (using current time)
- Adds it to the list
- Clears the input box

### 🗑️ `deleteTodo(id)`
- Filters out the todo with matching ID
- Updates the list without that todo

### 🔄 `toggleComplete(id)`
- Finds the todo with matching ID
- Flips its `completed` status (true ↔ false)
- Updates the list

### ⌨️ `handleKeyPress(e)`
- Listens for Enter key
- Calls `addTodo()` when pressed

---

## 🎨 What You See

### Input Section
- Text box for typing new todos
- "Add" button to submit
- Enter key also works!

### Todo List
- Each todo shows its text
- Click the text to toggle complete ✅
- "Delete" button to remove ❌
- Completed todos look different (crossed out)

### Empty State
- Shows helpful message when no todos exist

---

## 🚀 React Magic
- **useState**: Keeps track of data that changes
- **map()**: Turns each todo into a list item
- **filter()**: Removes specific todos
- **Spread operator (...)**: Adds new todos without breaking old ones

---

## 💡 Key React Rules Followed
- ✅ Never mutate state directly (always use `setTodos`)
- ✅ Each list item has unique `key` prop
- ✅ Event handlers properly bound
- ✅ Controlled components (input value controlled by state)

<br>
