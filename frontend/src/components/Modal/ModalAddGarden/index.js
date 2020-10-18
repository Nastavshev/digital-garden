import React from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import styles from './index.module.css'
import { useDispatch } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';

function ModalAddGarden(props) {

  // const dispatch = useDispatch();

  const { setOpen, open } = props;

  const [inputsGarden, setInputsGarden] = useState({
    title: '',
    comment: '',
  });

  const { title, comment } = inputsGarden;
  function handleChange({ target: { name, value } }) {
    setInputsGarden({
      ...inputsGarden,
      [name]: value,
    });
  }

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

  //Разобраться с нежелательным поведением
  const init = () => {
    new window.ymaps.SuggestView('suggest', { results: 3, });
  };

  async function saveGarden() {
    const response = await fetch('/modaladdGarden', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputsGarden })
    });
  }

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
            // id="title"
            label="Введите название"
            type="text"
            fullWidth
            onChange={(e) => handleChange(e)}
            name="title"
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
            onChange={(e) => handleChange(e)}
            name="comment"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={(event) => { handleClose(); saveGarden(event) }} color="primary">
            Создать!
          </Button>
        </DialogActions>
      </Dialog >
    </div >
  );
}

export default ModalAddGarden;
