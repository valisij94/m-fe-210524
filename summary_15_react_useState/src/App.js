import { useState } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import TodoStats from './components/todoList/TodoStats';
import Copyright from './components/copyright/Copyrgiht';

function App() {

  const [todos, setTodos] = useState(['Buy a car', 'Buy cryptocurrencies', 'Feed the dog']);

  const dropTodo = () => {
    setTodos( oldTodos => {
      return oldTodos.slice(0, -1);
    });
  }

  return (
    <div className="App simpleStyle">

      <h2>Simple TodoList Project</h2>

      <TodoList todos={todos} dropTodo={dropTodo}/>
      <TodoStats todos={todos}/>

      <Copyright />
    </div>
  );
}

export default App;