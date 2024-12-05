import './App.css';


import Greeting from './components/greeting/Greeting';
import Copyright from './components/copyright/Copyrgiht'
import TodoList from './components/todoList/TodoList';
import { useEffect, useState } from 'react';
import ProductList from './components/productList/ProductList'

function App() {

  const [todos, setTodos] = useState( []);

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

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

  /*
 4. Добавляем обработку нештатной ситуации. Если при запросе, или при разборе результата что-то пошло не так - то нужно показывать параграф с текстом "Что-то пошло не так, попробуйте позже".
 */

  useEffect( () => {
    setIsFetching(true);
    fetch('https://dummyjson.com/todos')
      .then( resp => resp.json())
      .then( data => {
        setTodos(data.todos)
        setError(false);
      })
      .catch( (err) => {
        setError(true);
      })
      .finally( () => {
        setIsFetching(false);
      });
  }, []);

  return (
    <div className="App simpleStyle">
      <Greeting />
      <ProductList />
      <Copyright/>
    </div>
  );
}

export default App;