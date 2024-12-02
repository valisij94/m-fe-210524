import { useState } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import TodoStats from './components/todoList/TodoStats';
import Copyright from './components/copyright/Copyrgiht';

import { todos as todosArray } from './data/todos.js';

function App() {

  const [todos, setTodos] = useState(todosArray);

  const dropTodo = () => {
    setTodos( oldTodos => {
      return oldTodos.slice(0, -1);
    });
  }

  const checkTodo = (todoId) => {
    setTodos( old => old.map( todo => {

      if (todo.id === todoId) {
        return {...todo, done: !todo.done}
      }
      return todo;
    }));
  }

  const dropTodoById = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId ) );
  }

  return (
    <div className="App simpleStyle">

      <h2>Simple TodoList Project</h2>

      <TodoList
        todos={todos}
        dropTodo={dropTodo}
        dropTodoById={dropTodoById}
        checkTodo={checkTodo}
      />
      <TodoStats todos={todos}/>

      <Copyright />
    </div>
  );
}

export default App;