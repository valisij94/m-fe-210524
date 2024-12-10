export default function TodoStats( {todos = []} ) {

  return (
    <div>
      <p>Now we have {todos.length} todos!</p>
    </div>
  )
}