import React from 'react';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import styles from './index.module.css'
import { useDispatch, useSelector } from 'react-redux';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import Garden from '../../Garden'
import { Link } from 'react-router-dom';
import { createGarden } from '../../../redux/createGaredenActions';

function ModalAddGarden(props) {

  const dispatch = useDispatch();
  // const garden = useSelector((state) => state.garden);
  const [gardenId, setGardenId] = useState();

  const { setOpen, open } = props;

  const [inputsGarden, setInputsGarden] = useState({
    title: '',
    comment: '',
    location: '',
  });
  const idUser = useSelector((state) => state.user.id);
  // const { title, comment, location } = inputsGarden;
  function handleChange({ target: { name, value } }) {
    setInputsGarden({
      ...inputsGarden,
      [name]: value,
    });
    console.log(value);
  }

  const loadScript = (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  };

  // // Закрытие модального окна 
  const handleClose = (e) => {
    setOpen(false);
  };

  useEffect(() => {
    loadScript("https://api-maps.yandex.ru/2.1?apikey=1aa68c91-3c36-46a3-9d6c-b1a840b26ad8&lang=ru_RU", () => {
    });
  }, []);

  const init = () => {
    new window.ymaps.SuggestView('suggest', { results: 3 });

  };

  async function saveGarden() {
    const response = await fetch('/modals/garden', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputsGarden, idUser })
    });
    const data = await response.json();
    setGardenId(data._id);
    dispatch(createGarden(data));
  }


  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={styles.dialog}>
        <DialogTitle id="form-dialog-title"><strong>Создание участка</strong></DialogTitle>
        <DialogContent>
          <DialogContentText>
            Заполните, пожалуста, информацию для создания модели вашего участка
          </DialogContentText>
          <form autocomplete="off">
          <TextField
            autoFocus
            margin="dense"
            label="Введите название"
            type="text"
            fullWidth
            onChange={(e) => handleChange(e)}
            name="title"
            required
            autocomplete="off"
          />
          </form>
        </DialogContent>
        <div className={styles.inputsLocation}>
        <form autocomplete="off">
          <TextField
            autoFocus
            fullWidth
            id="suggest"
            label="Введите населенный пункт"
            type="text"
            onSelect={(e) => { init(e); handleChange(e); }}
            name="location"
            required
            autocomplete="off"
          />
          </form>
        </div>
        <DialogContent>
        <form autocomplete="off">
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
            autocomplete="off"
          />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Link to='/user/garden/new'><Button onClick={() => { saveGarden(); handleClose() }} color="primary">
            Создать!
          </Button></Link>
        </DialogActions>
      </Dialog >
    </div >
  );
}

export default ModalAddGarden;
