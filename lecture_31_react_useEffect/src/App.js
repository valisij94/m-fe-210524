import './App.css';


import Greeting from './components/greeting/Greeting';
import Copyright from './components/copyright/Copyrgiht'
import TodoList from './components/todoList/TodoList';

function App() {

  const [todos, setTodos] = useState( ['First todo', 'Second todo', 'Third todo']);
  const dropLastTodo = () => {
    setTodos(old => old.slice(0, -1));
  }
  const [todosHeader, setTodosHeader] = useState('My ToDos');

  const [inputValue, setInputValue] = useState('');

  const changeTodosHeader = () => {
    setTodosHeader(inputValue);
  }

  return (
    <div className="App simpleStyle">
      <Greeting />
      <input
        value={inputValue}
        type='text'
        onChange={ (e) => setInputValue(e.target.value) }
        placeholder='Todos list header'
      />
      <button onClick={changeTodosHeader}>Change todos header</button>
      <TodoList
        todosHeader={todosHeader}
        todos={todos}
        dropLastTodo={dropLastTodo}
      />
      <Copyright/>
    </div>
  );
}

export default App;