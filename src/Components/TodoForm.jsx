import React, { useState } from "react";
import { TodoProvider, useTodo } from "../Contexts";

const TodoForm = () => {
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");

  const add = (e) => {
    e.preventDefault();

    if (!todo) return;

    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form action="" className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Add Todo..."
        className=" w-4/5 border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white"
      >
        ADD
      </button>
    </form>
  );
};

export default TodoForm;
