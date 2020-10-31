import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { setFault, setLogup, setAuthError } from '../../../redux/authActions';
import styles from './index.module.css';

function Logup(props) {
  const { setOpenSignup, openSignup } = props;
  const errorMessage = useSelector((state) => state.isAuthenticated.error);
  // // Закрытие модального окна
  const handleClose = () => {
    setOpenSignup(false);
  };

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
          handleClose();
          return history.push('/user/account');
        }
        dispatch(setFault());
        return setError('Пользователь с таким email уже существует');
      }
      return setError('Пароль не совпадает');
    } catch (err) {
      return dispatch(setAuthError(err));
    }
  }

  return (
    <>
      {errorMessage
        || (
          <Dialog open={openSignup} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog">
            <DialogTitle id="form-dialog-title"><strong>Регистрация</strong></DialogTitle>
            <DialogContent>
              <DialogContentText>
                Заполните, пожалуста, все поля для регистрации
              </DialogContentText>
              <form autoComplete="off">
                <TextField
                  autoFocus
                  margin="dense"
                  label="Введите имя"
                  type="text"
                  fullWidth
                  onChange={handleChange}
                  name="name"
                  value={name}
                  autocomplete="off"
                />
              </form>
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
                  required
                  value={email}
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
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="location"
                label="Подтвердите пароль"
                type="password"
                fullWidth
                onChange={handleChange}
                name="confirm"
                value={confirm}
                required
              />
            </DialogContent>
            <DialogContent className={styles.error}>{error}</DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Отмена
              </Button>
              <Button onClick={handleSubmit} color="primary">
                Зарегистрироваться!
              </Button>
            </DialogActions>
          </Dialog>
        )}
    </>
  );
}

export default Logup;
