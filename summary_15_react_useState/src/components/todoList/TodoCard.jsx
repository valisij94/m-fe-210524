
export default function TodoCard( {todo, dropTodoById, checkTodo} ) {

  const stylesObj = {};
  if (todo.done) {
    stylesObj.backgroundColor = 'green';
  }

  const btnClickHandler = () => {
    dropTodoById(todo.id);
  }

  const inputCheckHandler = () => {
    checkTodo(todo.id);
  }

  return (
    <div style={stylesObj} className='todoCard'>
      <h3>{todo.header}</h3>
      <p>{todo.description}</p>
      <input type='checkbox' checked={todo.done} onChange={ inputCheckHandler }/>
      <button onClick={ btnClickHandler }>Drop todo</button>
    </div>
  )
}