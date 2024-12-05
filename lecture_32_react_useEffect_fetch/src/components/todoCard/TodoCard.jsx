export default function TodoCard( {todo, dropTodoById, checkTodo} ) {

  const btnClickHandler = () => {
    dropTodoById(todo.id);
  }

  const inputCheckHandler = () => {
    checkTodo(todo.id);
  }

  const detailBtnClickHandler = () => {
    fetch(`https://dummyjson.com/todos/${todo.id}`)
      .then( resp => resp.json() )
      .then( data => console.log(data) );
  }

  return (
    <div className='todoCard'>
      <h3>{todo.todo}</h3>
      <label htmlFor={`todo_${todo.id}_status`}>Status:</label>
      <input id={`todo_${todo.id}_status`} type='checkbox' checked={todo.completed} onChange={ inputCheckHandler }/>
      <button onClick={ btnClickHandler }>Drop todo</button>
      <button onClick={ detailBtnClickHandler }>Detail info</button>
    </div>
  )
}