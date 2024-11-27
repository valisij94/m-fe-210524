import { useState } from "react";

export default function LoginForm( {setLoginValue} ) {

  const [login, setLogin] = useState('');
  const [pwd, setPwd] = useState('');

  const [error, setError] = useState(false);

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  }

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  }

  const handleSubmitClick = (event) => {
    event.preventDefault();
    if (login && pwd) {
      setError(false);
      console.log('Form submitted!', login, pwd);
      setLoginValue(login);
    } else {
      setError(true);
    }
  }

  return (
    <form>
      <input value={login} onChange={handleLoginChange} type='text' placeholder="login" />
      <input value={pwd} onChange={handlePwdChange} type='password' placeholder="password" />
      <button onClick={handleSubmitClick}>Submit form</button>
      { error && <p>Fill all fields!</p>}
    </form>
  )
}