import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TodoProvider } from "./Contexts";
import { useEffect } from "react";
import TodoItems from "./Components/TodoItems";
import TodoForm from "./Components/TodoForm";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todoTitle) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todoTitle : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((values) =>
        values.id == id ? { ...values, completed: !values.completed } : values
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // another use effect will be created in order to add todos in local storage when added by the user.

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); //key value pair
  }, [todos]);

  return (
    <>
    <div className=" w-full h-screen bg-slate-700 flex flex-col items-center">
      <TodoProvider
        value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
      >
        <div className=" bg-slate-700  w-screen flex justify-center flex-col items-center">
          <div className="text text-white font-bold text-2xl capitalize my-11">
            <h1>todo list</h1>
          </div>
          <div className="form mb-4">
            <TodoForm />
          </div>
          <div className="todoItems flex flex-wrap gap-y-3 flex-col">
            {todos.map((todo) => (
              <div key={todo.id} >
                <TodoItems todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </TodoProvider>
      </div>
    </>
  );
}

export default App;
