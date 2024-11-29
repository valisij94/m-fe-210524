export default function TodoList( {todos, dropTodo} ) {

  return (
    <div>
      { todos.map( todo => <p key={todo}>{todo}</p>)}
      <button onClick={dropTodo}>Drop last todo</button>
    </div>
  );
}