export default function TodoList( {todos, dropLastTodo, todosHeader} ) {

  return (
    <div className='todoListContainer'>
      <h3>{todosHeader}</h3>
      <div className='todosContainer'>
        { todos.map( todo => <p key={todo}>{todo}</p>)}
      </div>
      <button onClick={dropLastTodo}>Drop last todo</button>
    </div>
  );
}