import React, { useState, useEffect } from 'react';
import styles from './modalBed.module.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { getVegetThunk } from '../../redux/action-creater';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

const StyledTextField = withStyles({
  root: {
    width: '140%',
    marginLeft: '-20%',
  },
})(TextField);

function ModalBed(props) {
  const { idGarden, setOpenModalBed, openModalBed } = props;
  const [necessaryInfo, setNecessaryInfo] = useState('');
  const { id } = props;

  // // Закрытие модального окна 
  const handleClose = () => {
    setOpenModalBed(false);
  };

  const vegetablesArray = useSelector((state) => state.vegetables);

  const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [input, setInput] = useState({
    name: '',
    grade: '',
    comment: '',
    datePlant: '',
  });

  function changeInputs(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    })
  }

  function findInfoAbout(event) {
    let data = vegetablesArray.find((element) => element.vegetableName === event.target.value)
    setNecessaryInfo(data)
  }

  async function saveInfoGardenBed() {
    const response = await fetch(`/modal/${idGarden}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input, id })
    });
    if (response.status === 200) {
      setOpenModalBed(!openModalBed)
    }
  }

  return (
    <Dialog open={openModalBed} onClose={handleClose} aria-labelledby="form-dialog-title" className={styles.dialog}>
      <DialogTitle id="form-dialog-title">Посадка</DialogTitle>
      <DialogContent>
        <DialogContentText>А сейчас Вам нужно будет заполнить форму ниже, чтобы в любой момент можно было узнать что и на какой грядке растет</DialogContentText>
        <DialogContent>
        </DialogContent>
        <Autocomplete
          margin="dense"
          id="combo-box-demo"
          options={vegetablesArray}
          getOptionLabel={(option) => option.vegetableName}
          style={{ width: '100%' }}
          renderInput={(params) => <TextField {...params} label="Название культуры" variant="outlined" name="name" onSelect={(e) => { changeInputs(e); findInfoAbout(e) }} />}
        />
        <form autocomplete="off">
          <TextField autocomplete="off" className={styles.inputField} onChange={changeInputs} id="filled-basic" label="Сорт" name="grade" variant="filled" margin="dense" fullWidth />
        </form>
        <TextField
          name="datePlant"
          onChange={changeInputs}
          id="date"
          label="Дата высадки"
          type="date"
          defaultValue="2020-10-01"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Accordion>
          <AccordionSummary
            margin="dense"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Добавить комментарий о данной культуре</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              margin="dense"
              name="comment"
              onChange={changeInputs}
              id="filled-multiline-static"
              label=""
              multiline
              fullWidth
              defaultValue=""
              variant="filled"
            />
          </AccordionDetails>
        </Accordion>
      </DialogContent>
      <DialogContent>
        <DialogContentText>
          {necessaryInfo
            ?
            <div className={styles.info}>
              <p>Время от посева до появления всходов, дни</p>
              <p>в открытом грунте: {necessaryInfo?.referenceInfo?.timeFromSowingToEmergence?.openGround}</p>
              <p>в закрытом грунте: {necessaryInfo?.referenceInfo?.timeFromSowingToEmergence?.closedGround}</p>
              <p>Минимальная температура прорастания, t C: {necessaryInfo?.referenceInfo?.temperature}</p>
            </div>
            : ''
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Отмена
          </Button>
        <Button onClick={saveInfoGardenBed} color="primary">Сохранить информацию о посаженных культурах</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ModalBed;
