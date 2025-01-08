import './App.css';
import { Routes, Route } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import Counter from './components/counter/Counter.jsx';
import AddTodo from './components/todos/AddTodo.jsx';
import TodoList from './components/todos/TodoList.jsx';

function App() {

  return (
    <div className="App">
      <h2>Introduction into Redux state manager</h2>
      <div className='mainPageContainer'>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>

      <AddTodo />
      <Counter />
      <TodoList />
      <Copyright />
    </div>
  );
}

export default App;