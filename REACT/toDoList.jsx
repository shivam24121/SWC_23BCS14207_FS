import React, { useState } from "react";

function App() {

  const [currentInput, setCurrentInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {

    const trimmedText = currentInput.trim();

    if (trimmedText === "") return;

    const newTodo = {
      id: Date.now(),
      text: trimmedText,
      completed: false
    };

    setTodos([...todos, newTodo]);

    setCurrentInput("");
  }

  function toggleTodo(id) {

    const updatedTodos = todos.map((todo) => {

      if (todo.id === id) {

        return {
          ...todo,
          completed: !todo.completed
        };
      }

      return todo;
    });

    setTodos(updatedTodos);
  }

  function deleteTodo(id) {

    const filteredTodos = todos.filter((todo) => {

      return todo.id !== id;
    });

    setTodos(filteredTodos);
  }

  return (
    <div style={{ padding: "20px" }}>

      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Enter task..."
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
      />

      <button onClick={addTodo}>
        Add
      </button>

      <ul>

        {todos.map((todo) => (

          <li key={todo.id}>

            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                textDecoration: todo.completed
                  ? "line-through"
                  : "none",
                cursor: "pointer",
                marginRight: "10px"
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>
              X
            </button>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;
