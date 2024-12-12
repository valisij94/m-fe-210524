import { useForm } from 'react-hook-form';

export default function SimpleForm() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  console.log('Errors', errors);

  const submitHandler = (formData) => {
    console.log(formData);
  }

  return (
    <form className='simpleForm' onSubmit={handleSubmit(submitHandler)}>
      <h2>Simple form to deal with react-hook-form</h2>
      <input type='text' placeholder='Name' {...register('name', { required: { value: true, message: 'Hey, this is required!' } } )} />
      <input type='text' placeholder='Email' {...register('email', { pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ } )} />
      <input
    type='text'
    placeholder='Phone'
    {...register('phone', {
      required: { value: true, message: 'Enter your phone now!' },
      minLength: { value: 5, message: 'Too short!' },
      maxLength: { value: 10, message: 'Too long!' },
      validate: { shouldContain0: (fldVal) => fldVal.includes('0') || 'This field should contain 0!' }
    } )} />
      <p>Select an account type:</p>
      <select {...register('accountType')} >
        <option value='basic'>Basic</option>
        <option value='advanced'>Advanced</option>
        <option value='pro'>Pro</option>
      </select>
      <button onClick={() => {console.log(errors)}}>Show errors</button>
      <button type='submit'>Send form</button>
    </form>
  )
}