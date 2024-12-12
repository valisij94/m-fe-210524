import { useForm } from 'react-hook-form';

export default function RegisterForm() {

  const { register, handleSubmit } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form className='registerForm' onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='nameInput'>Name</label>
      <input
        id='nameInput'
        placeholder='Name'
        { ...register('name', { required: true, maxLength: 10 })}
      />
      <label htmlFor='phoneInput'>Phone</label>
      <input
        id='phoneInput'
        placeholder='Phone'
        { ...register('mobile', {
          required: true,
          pattern: /^0\d{9}$/,
          validate: (value, formValues) => formValues.name === 'Pumba'
        })}
      />
      <select
        id='accountType'
        {
          ...register('account')
        }
      >
        <option value="basic">Basic</option>
        <option value="luxury">Luxury</option>
      </select>
      <button type="submit">Register</button>
    </form>
  )
}