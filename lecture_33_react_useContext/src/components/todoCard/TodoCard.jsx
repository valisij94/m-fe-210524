import Button from "../button/Button";

export default function TodoCard( {todo, dropTodoById, checkTodo} ) {

  const btnClickHandler = () => {
    dropTodoById(todo.id);
  }

  const inputCheckHandler = () => {
    checkTodo(todo.id);
  }

  return (
    <div className='todoCard'>
      <h3>{todo.todo}</h3>
      <label htmlFor={`todo_${todo.id}_status`}>Status:</label>
      <input id={`todo_${todo.id}_status`} type='checkbox' checked={todo.completed} onChange={ inputCheckHandler }/>
      <Button btnText='Drop todo' clickHandler={ btnClickHandler }/>
    </div>
  )
}