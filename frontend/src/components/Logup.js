import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setFault, setLogup } from '../redux/authActions';

function Logup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [error, setError] = useState();
  const [inputs, setInputs] = useState({});
  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  const {
    name, email, password, confirm,
  } = inputs;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (password === confirm) {
        const response = await fetch('/auth/logup', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        });
        if (response.status === 200) {
          dispatch(setLogup());
          return history.push('/secret');
        }
        dispatch(setFault());
        return setError('пользователь с таким email уже существует');
      }
      return setError('Пароль не совпадает');
    } catch (err) {
      console.error('ERROR ENTER LOGIN PAGE', err);
      return setError('ERROR ENTER LOGIN PAGE');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>
          Name:
          <input onChange={handleChange} name="name" type="text" value={name} required />
        </lable>
        <lable>
          mail:
          <input onChange={handleChange} type="email" name="email" value={email} required />
        </lable>
        <lable>
          Password:
          <input onChange={handleChange} type="password" name="password" value={password} required />
        </lable>
        <lable>
          Confirm password:
          <input onChange={handleChange} type="password" name="confirm" value={confirm} required />
        </lable>
        <button className="error" type="submit">Signup</button>
        <div>{error}</div>
      </form>
    </>
  );
}

export default Logup;
