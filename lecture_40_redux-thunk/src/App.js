import './App.css';
import { Routes, Route, Link } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

import Counter from './components/counter/Counter.jsx';
import AddTodo from './components/todos/AddTodo.jsx';
import TodoList from './components/todos/TodoList.jsx';

function App() {

  return (
    <div className="App">
      <h2>Introduction into Redux state manager</h2>
      <div className='mainPageContainer'>
        <div className='navBlock'>
          <Link to='/'>Home</Link>
          {/* <Link to='/products'>Products</Link> */}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/products" element={<ProductsPage />} /> */}
        </Routes>
      </div>
      <Counter />
      <AddTodo />
      <TodoList />
      <Copyright />
    </div>
  );
}

export default App;