import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFault, setLogin } from '../../../redux/authActions.js';

function Login(props) {
  const { setOpenLogin, openLogin } = props;

  // // Закрытие модального окна 
  const handleClose = () => {
    setOpenLogin(false);
  };

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
    <div>
      <Dialog open={openLogin} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog">
        <DialogTitle id="form-dialog-title"><strong>Вход</strong></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните, пожалуста, поля ниже для входа на сайт
          </DialogContentText>
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            // id="location"
            label="Введите e-mail"
            type="password"
            fullWidth
            onChange={handleChange} 
            name="email"
            value={email}
            required
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            // id="location"
            label="Введите пароль"
            type="password"
            fullWidth
            onChange={handleChange} 
            name="password" 
            value={password}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={(e) => {handleSubmit(e); handleClose()}}color="primary">
            Войти!
          </Button>
          <div className="error">{error}</div>
        <Link to="/">HOME</Link>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Login;
