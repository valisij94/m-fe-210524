import './App.css';


import Copyright from './components/copyright/Copyrgiht'
import TodoList from './components/todoList/TodoList';
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Button from './components/button/Button';
import SimpleCounter from './components/counter/SimpleCounter';
import { CounterContext } from './context/CounterContext';

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

  const [counter, setCounter] = useState(0);
  const incrementHandler = () => setCounter(counter + 1);
  const decrementHandler = () => setCounter(counter - 1);

  const themeContext = useContext(ThemeContext);


  return (
    <div className="App simpleStyle">
        <Button clickHandler={themeContext.switchTheme} btnText="Switch theme"></Button>
        <CounterContext.Provider value={counter}>
          <SimpleCounter/>
          <button onClick={incrementHandler}>Increment</button>
          <button onClick={decrementHandler}>Decrement</button>
          <TodoList todos={todos} dropTodoById={dropTodoById} checkTodo={checkTodo}/>
        </CounterContext.Provider>

        <SimpleCounter/>
        <Copyright/>
        <Button btnText="Simple btn" clickHandler={() => {}} />
    </div>
  );
}

export default App;