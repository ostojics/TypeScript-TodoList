import { useContext } from 'react';
import { TodosContext } from '../../store/todos-context';
import './Todos.css';
import Todo from '../Todo/Todo';

const NewTodo: React.FC = () => {
    const todosContext = useContext(TodosContext);

    const { items } = todosContext;

    return (
        <div className='todos'>
            { items.map(item => {
                return <Todo todoText={ item.text } key={ item.id } clickHandler = { () => todosContext.removeTodo(item.id) }/>
            }) }
        </div>
    )
}

export default NewTodo;