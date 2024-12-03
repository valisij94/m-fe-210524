import './App.css';


import Greeting from './components/greeting/Greeting';
import Copyright from './components/copyright/Copyrgiht'
import TodoList from './components/todoList/TodoList';

function App() {

  const [todos, setTodos] = useState( []);

  const dropTodoById = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId ) );
  }

  const checkTodo = (todoId) => {
    setTodos( old => old.map( todo => {

      if (todo.id === todoId) {
        return {...todo, done: !todo.done}
      }
      return todo;
    }));
  }

  return (
    <div className="App simpleStyle">
      <Greeting />
      <TodoList
        todosHeader={'Simple TodoList'}
        todos={todos}
        dropTodoById={dropTodoById}
        checkTodo={checkTodo}
      />
      <Copyright/>
    </div>
  );
}

export default App;