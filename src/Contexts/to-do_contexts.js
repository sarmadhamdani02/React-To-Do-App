import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todos:[
        {
            id: 1,
                todoTitle: "First TODO",
                completed: false
            },
        ],
    addTodo: (todo) => {},
    updateTodo: (id, todoTitle) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider