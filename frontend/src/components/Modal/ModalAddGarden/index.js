import React from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import styles from './index.module.css'

import DialogTitle from '@material-ui/core/DialogTitle';

function ModalAddGarden(props) {
  const { setOpen, open } = props;
  // const [inputOne, setInputOne] = useState('');

  const loadScript = (src, onLoad) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    script.onload = onLoad;
  };

  // // Закрытие модального окна 
  const handleClose = (e) => {
    setOpen(false);
    // console.log(inputOne)
  };

  useEffect(() => {
    loadScript("https://api-maps.yandex.ru/2.1?apikey=1aa68c91-3c36-46a3-9d6c-b1a840b26ad8&lang=ru_RU", () => {
      window.ymaps.ready(init);
    });
  }, []);

  const init = () => {
    new window.ymaps.SuggestView('suggest', { results: 3, });
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={styles.dialog}>
        <DialogTitle id="form-dialog-title"><strong>Создание участка</strong></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните, пожалуста, информацию для создания модели вашего участка
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Введите название"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <input
            // Надо переписать этот инпут!
            autoFocus
            margin="dense"
            id="suggest"
            label="Введите населенный пункт"
            type="text"
          // fullWidth
          // onСhange={() => init()}
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="outlined-basic"
            label="Введите комментарий"
            type="text"
            variant="outlined"
            className="comment"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={handleClose} color="primary">
            Создать!
          </Button>
        </DialogActions>
      </Dialog >
    </div >
  );
}

export default ModalAddGarden;
