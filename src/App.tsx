import TodosContextProvider from './store/todos-context';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos';

const App = () => {
  return (
    <TodosContextProvider>
      <AddTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
