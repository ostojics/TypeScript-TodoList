import React, { useState } from 'react';

import Todo from '../models/TodoModel';

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
  };

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: number) => {},
})

const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos((prevTodos) => {
           return prevTodos.concat(newTodo);
        })
    }

    const removeTodoHandler = (id: number) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id);
        })
    }

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    }

    return (
        <TodosContext.Provider value = { contextValue }>
            { props.children }
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;
