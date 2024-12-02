export default function Greeting( {userName} ) {

  return (
    <h3>Hello, {userName ? userName : 'stranger'}! </h3>
  )
}