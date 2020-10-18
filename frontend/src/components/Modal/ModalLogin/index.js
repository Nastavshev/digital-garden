import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import DialogTitle from '@material-ui/core/DialogTitle';

function Login(props) {
  const { setOpenLogin, openLogin } = props;

  // // Закрытие модального окна 
  const handleClose = () => {
    setOpenLogin(false);
  };

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
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            Войти!
          </Button>
        </DialogActions>
      </Dialog >
    </div >
  );
}

export default Login;
