export default function SimpleForm() {

  return (
    <form className='simpleForm'>
      <h2>Simple form to deal with react-hook-form</h2>
      <input type='text' placeholder='Name'/>
      <input type='text' placeholder='Email'/>
      <input type='text' placeholder='Phone'/>
      <p>Select an account type:</p>
      <select>
        <option value='basic'>Basic</option>
        <option value='advanced'>Advanced</option>
        <option value='pro'>Pro</option>
      </select>
    </form>
  )
}