import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setFault, setLogup } from '../redux/authActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import emailjs from 'emailjs-com';
import { LOGOUT } from '../redux/actionTypes';

function Logup(props) {
  const { setOpenSignup, openSignup } = props;

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

  let data = {
    name: name,
    email: email,
    password: password
  }

  function sendEmail(e) {
    // e.preventDefault();
    console.log('send email');
    // emailjs.send(
    //   'Yandex',
    //   'template_tswrqnv',
    //   'user_fgtM1ILKeawxufmu65ncd',
    //   data
    // )
    //   .then((result) => {
    //     console.log(result.text);
    //   }, (error) => {
    //     console.log(error.text);
    //   });
  }

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
        console.log(response);
        if (response.status === 200) {
          dispatch(setLogup());
          sendEmail(e);
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

    <div>
      <Dialog open={openSignup} onClose={handleClose} aria-labelledby="form-dialog-title" className="dialog">
        <DialogTitle id="form-dialog-title"><strong>Регистрация</strong></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните, пожалуста, все поля для регистрации
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            // id="title"
            label="Введите имя"
            type="text"
            fullWidth
            onChange={handleChange}
            name="name"
            value={name}
          />
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
            required
            value={email}
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
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Подтвердите пароль"
            type="text"
            fullWidth
            onChange={handleChange}
            name="confirm"
            value={confirm}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={(e) => { handleSubmit(e); handleClose() }} color="primary">
            Зарегистрироваться!
          </Button>
          <div>{error}</div>
        </DialogActions>
      </Dialog>
    </div>




  );
}

export default Logup;
