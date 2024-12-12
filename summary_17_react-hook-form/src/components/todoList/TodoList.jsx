import TodoCard from "../todoCard/TodoCard";

export default function TodoList( {todos, todosHeader, dropTodoById, checkTodo} ) {

  return (
    <div className='todoListContainer'>
      <h3>{todosHeader}</h3>
      <div className='todosContainer'>
        { todos.map( todo => <TodoCard dropTodoById={dropTodoById} checkTodo={checkTodo} key={todo.id} todo={todo}/>)}
      </div>
    </div>
  );
}