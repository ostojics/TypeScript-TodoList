import { useRef, useContext } from 'react';

import { TodosContext } from '../../store/todos-context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import './AddTodo.css';

const AddTodo: React.FC = () => {   
    const todosContext = useContext(TodosContext);
    const todoInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoInputRef.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        }

        todosContext.addTodo(enteredText);

        todoInputRef.current!.value = '';
    }

    return (
        <form onSubmit={ submitHandler } className='newTodoForm'> 
            <input type='text' ref={ todoInputRef } className='newTodoForm-input'/>
            <button className='newTodoForm-button'><FontAwesomeIcon icon={ faPlus } className='newTodoForm-button__icon'/></button>
        </form>
    )
} 

export default AddTodo;