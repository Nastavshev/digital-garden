import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import DialogTitle from '@material-ui/core/DialogTitle';

function Signup(props) {
  const { setOpenSignup, openSignup } = props;

  // // Закрытие модального окна 
  const handleClose = () => {
    setOpenSignup(false);
  };

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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            Зарегистрироваться!
          </Button>
        </DialogActions>
      </Dialog >
    </div >
  );
}

export default Signup;
