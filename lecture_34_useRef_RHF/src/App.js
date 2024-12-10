import './App.css';


import Copyright from './components/copyright/Copyrgiht'
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
      .then( resp => resp.json())
      .then( data => {
        setTodos(data.todos)
      });
  }, []);

  return (
    <div className="App simpleStyle">
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <input type='text' placeholder='Enter your name' name='name'/>
          <input type='phone' placeholder='Enter your phone' name='phone'/>
          <button>Click me!</button>
        </div>
        <TodoList todos={todos} dropTodoById={dropTodoById} checkTodo={checkTodo}/>
        <Copyright/>
    </div>
  );
}

export default App;