// src/components/TodoList.js
import React, { useState } from "react";
import batmanLogo from "../assets/batman-logo.png";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const completeTodo = (index) => {
    const completedTodo = todos[index];
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  const deleteTodo = (index, type) => {
    if (type === "todo") {
      const newTodos = todos.filter((_, i) => i !== index);
      setTodos(newTodos);
    } else if (type === "completed") {
      const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
      setCompletedTodos(newCompletedTodos);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-4">
        <img src={batmanLogo} alt="Batman Logo" className="h-16 mr-4" />
        <h1 className="text-3xl font-semibold">BatList</h1>
      </div>
      <div className="flex mb-4">
        <input
          type="text"
          className="py-2 px-3 border border-gray-700 rounded-lg mr-2 flex-grow bg-gray-800 text-white"
          placeholder="Enter a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg hover:bg-yellow-600"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Current Tasks</h2>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="py-2 px-3 border border-gray-700 rounded-lg mb-2 flex items-center justify-between bg-gray-800"
            >
              <span>{todo}</span>
              <div>
                <button
                  className="text-green-500 mr-2"
                  onClick={() => completeTodo(index)}
                >
                  Complete
                </button>
                <button
                  className="text-red-500"
                  onClick={() => deleteTodo(index, "todo")}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Completed Tasks</h2>
        <ul>
          {completedTodos.map((todo, index) => (
            <li
              key={index}
              className="py-2 px-3 border border-gray-700 rounded-lg mb-2 flex items-center justify-between bg-gray-800"
            >
              <span className="line-through">{todo}</span>
              <button
                className="text-red-500"
                onClick={() => deleteTodo(index, "completed")}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
