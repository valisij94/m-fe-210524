import {useState} from 'react';
import { addTodo } from '../../redux/slices/todosSlice';
import { useDispatch } from 'react-redux';

export default function AddTodo() {

  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  }

  const btnClickHandler = () => {
    dispatch(addTodo(todo));
  }

  return (
    <div>
      <input type='text' placeholder='Todo name' value={todo} onChange={handleTodoChange}/>
      <button onClick={btnClickHandler}>Add Todo</button>
    </div>
  )
}