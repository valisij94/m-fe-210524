import { useDispatch, useSelector } from 'react-redux';
import { dropTodo, fetchTodos } from '../../redux/slices/todosSlice';
import { useEffect } from 'react';

export default function TodoList() {

  const { todos, filter } = useSelector( state => state.todos );
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchTodos())
  }, [])

  let filteredData = todos;
  if (filter) {
    filteredData = todos.filter( el => el.length <= +filter.to && el.length >= +filter.from);
  }

  return (
    <div>
      {filteredData.map(el => <div key={el.id}>
        <p>{el.todo}</p>
        <button onClick={ () => {dispatch( dropTodo(el.id) )} }>Drop</button>
      </div>)}
    </div>
  )
}