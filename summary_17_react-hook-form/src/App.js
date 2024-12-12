import './App.css';
import Copyright from './components/copyright/Copyrgiht'
import SimpleForm from './components/simpleForm/SimpleForm';
import TodoList from './components/todoList/TodoList';
import { useEffect, useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const dropTodoById = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId ) );
  }

  const checkTodo = (todoId) => {
    setTodos( old => old.map( todo => {

      if (todo.id === todoId) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }));
  }

  useEffect( () => {
    fetch('https://dummyjson.com/todos')
      .then(resp => resp.json())
      .then(data => setTodos(data.todos));
  }, []);

  return (
    <div className="App simpleStyle">
        <SimpleForm />
        <TodoList todos={todos} todosHeader="My TodoList" checkTodo={checkTodo} dropTodoById={dropTodoById} />
        <Copyright/>
    </div>
  );
}

export default App;