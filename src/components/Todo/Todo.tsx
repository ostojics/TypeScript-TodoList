
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './Todo.css';

const Todo: React.FC<{ todoText: string, clickHandler: () => void }> = (props) => {
    const { todoText, clickHandler } = props;

    return (
        <div className='todo'>
            <div className='todo-text'>
                <p>{ todoText }</p>
            </div>
            <div className='todo-icon' onClick={ clickHandler }>
                <FontAwesomeIcon icon={ faTrashAlt }/>
            </div>
        </div>
    )
}

export default Todo;