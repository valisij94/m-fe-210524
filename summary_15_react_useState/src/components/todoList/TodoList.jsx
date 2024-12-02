import TodoCard from "./TodoCard";

export default function TodoList( {todos, dropTodo, dropTodoById, checkTodo} ) {

  return (
    <div>
      { todos.map( todo => <TodoCard todo={todo} key={todo.id} checkTodo={checkTodo}
        dropTodoById={dropTodoById}/> ) }
      <button onClick={dropTodo}>Drop last todo</button>
    </div>
  );
}