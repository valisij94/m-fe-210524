import { useState } from 'react';
import './App.css';

import TodoList from './components/todoList/TodoList';
import TodoStats from './components/todoList/TodoStats';
import LoginForm from './components/loginForm/LoginForm'
import Greeting from './components/greeting/Greeting';
import LonelyMountainRoute from './components/mountainRoute/MountainRoute';

function App() {

  const [todos, setTodos] = useState(['Buy a car', 'Buy cryptocurrencies', 'Feed the dog']);

  const dropTodo = () => {
    setTodos( oldTodos => {
      return oldTodos.slice(0, -1);
    });
  }

  const [loginValue, setLoginValue] = useState('');

  return (
    <div className="App simpleStyle">

      <LonelyMountainRoute />

      <TodoList todos={todos} dropTodo={dropTodo}/>
      <TodoStats todos={todos}/>

      <LoginForm setLoginValue={setLoginValue}/>
      <Greeting userName={loginValue} />
    </div>
  );
}

export default App;