import { useDispatch, useSelector } from 'react-redux';
import { dropTodo } from '../../redux/slices/todosSlice';

export default function TodoList() {

  //const { data, filter } = useSelector( state => state.todos );
  const dispatch = useDispatch();
  const { todos: data } = useSelector(state => state.todos);

  let filteredData = data;
  // if (filter) {
  //   filteredData = data.filter( el => el.length <= +filter.to && el.length >= +filter.from);
  // }

  return (
    <div>
      {filteredData.map(el => <div key={el}>
        <p>{el}</p>
        <button onClick={ () => {dispatch( dropTodo(el) )} }>Drop</button>
      </div>)}
    </div>
  )
}