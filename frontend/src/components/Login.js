import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFault, setLogin } from '../redux/authActions';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.status === 200) {
        dispatch(setLogin());
        return history.push('/secret');
      }
      dispatch(setFault());
      const resp = await response.json();
      return setError(resp.message);
    } catch (err) {
      console.error('ERROR ENTER LOGIN PAGE', err);
      return setError('ERROR ENTER LOGIN PAGE');
    }
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>
          mail:
          <input onChange={handleChange} name="email" type="email" value={email} required />
        </lable>
        <lable>
          Password:
          <input onChange={handleChange} name="password" type="password" value={password} required />
        </lable>
        <button onClick={handleSubmit} type="submit">Signin</button>
        <div className="error">{error}</div>
        <Link to="/">HOME</Link>
      </form>
    </>
  );
}

export default Login;
