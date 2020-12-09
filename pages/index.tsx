import React, { useState } from "https://esm.sh/react";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

interface Todo {
  id: string;
  title: string;
  completed?: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");
  const handleCheckTodo = (id: string, e: React.ChangeEvent) => {
    const newTodos: React.SetStateAction<Todo[]> = [];
    todos.forEach((todo) => {
      if (todo.id !== id) {
        newTodos.push(todo);
      } else {
        const completeTodo = todo;
        todo.completed = e.target.checked;
        newTodos.push(completeTodo);
      }
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id: string) => {
    const newTodos: React.SetStateAction<Todo[]> = [];
    todos.forEach((todo) => {
      if (todo.id !== id) newTodos.push(todo);
    });
    setTodos(newTodos);
  };
  return (
    <div className="p-10">
      <div className="container mx-auto bg-white shadow-md rounded p-10">
        <div className="m-2">
          <h2 className="text-4xl mb-10">AlephJs Todo</h2>
          <div className="flex">
            <input
              className="h-10 mr-6 p-2 flex-1 bg-gray-50 rounded border"
              placeholder="Enter Todo"
              onChange={(e) => setTodo(e.target.value)}
            ></input>
            <button
              className="inline-flex items-center bg-indigo-800 text-white h-10 px-2 rounded shadow-md"
              onClick={() =>
                setTodos([
                  ...todos,
                  { id: v4.generate(), title: todo, completed: false },
                ])
              }
            >
              <svg
                className="h-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>Add Todo</span>
            </button>
          </div>
        </div>
        <div>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className="flex items-center p-2">
                <input
                  className="mr-6"
                  type="checkbox"
                  onChange={(e) => handleCheckTodo(todo.id, e)}
                ></input>
                <span
                  className={`flex-1 ${todo.completed ? "line-through" : ""}`}
                >
                  {todo.title}{" "}
                </span>
                <button
                  className="inline-flex items-center bg-indigo-800 text-white h-10 px-2 rounded"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <svg
                    className="h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  <span>Delete</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
