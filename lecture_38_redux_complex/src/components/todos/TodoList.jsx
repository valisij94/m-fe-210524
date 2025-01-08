import { useSelector } from 'react-redux';

export default function TodoList() {

  const todos = useSelector( state => state.todos.data );

  return (
    <div>
      {todos.map(el => <p key={el}>{el}</p>)}
    </div>
  )
}