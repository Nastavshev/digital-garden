import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFault, setLogin, setAuthError } from '../../../redux/authActions';
import { modalLogin } from '../../../redux/modalLoginActions';
import styles from './index.module.css';

function Login() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.modalLogin);
  const errorMessage = useSelector((state) => state.isAuthenticated.error);
  const history = useHistory();
  const [error, setError] = useState();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleClose = () => {
    dispatch(modalLogin());
  };

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
        dispatch(modalLogin());
        return history.push('/user/account');
      }
      dispatch(setFault());
      const resp = await response.json();
      return setError(resp.message);
    } catch (err) {
      return dispatch(setAuthError(err));
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
      {errorMessage
        || (
        <Dialog open={status} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog">
          <DialogTitle id="form-dialog-title"><strong>Вход</strong></DialogTitle>
          <DialogContent>
            <DialogContentText>
              Заполните, пожалуста, поля ниже для входа на сайт
            </DialogContentText>
          </DialogContent>
          <DialogContent>
            <form autoComplete="off">
              <TextField
                autoFocus
                margin="dense"
                label="Введите e-mail"
                type="text"
                fullWidth
                onChange={handleChange}
                name="email"
                value={email}
                required
                autocomplete="off"
              />
            </form>
          </DialogContent>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Введите пароль"
              type="password"
              fullWidth
              onChange={handleChange}
              name="password"
              value={password}
              required
            />
          </DialogContent>
          <DialogContent className={styles.error}>{error}</DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Отмена
            </Button>
            <Button onClick={(e) => { handleSubmit(e); }} color="primary">
              Войти!
            </Button>
          </DialogActions>
        </Dialog>
        )}
    </div>
  );
}

export default Login;
