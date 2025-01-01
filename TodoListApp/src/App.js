import { useState } from "react";

export default function App() {
  let [text, setText] = useState("");
  let [todos, setTodos] = useState([]);

  let handleAdd = () => {
    if (text.trim()) {
      setTodos([...todos, { text, completed: false }]);
      setText("");
      console.log(text);
    }
  };

  let handleDelete = (index) => {
    const updatedtodo = todos.filter((_, i) => i !== index);
    setTodos(updatedtodo);
  };

  let toggleComplete = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      &nbsp;
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todos.map((todo, index) => (
          <span key={index}>
            <li>{todo.text}</li>
            <button onClick={() => toggleComplete(index)}>
              {todo.completed ? "Completed" : "Not Completed"}
            </button>
            &nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </span>
        ))}
      </ul>
    </div>
  );
}
