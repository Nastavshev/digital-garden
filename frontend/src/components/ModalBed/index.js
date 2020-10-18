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

const StyledTextField = withStyles({
  root: {
    width: '140%',
    marginLeft: '-18%',
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    '& > *': {
      margin: theme.spacing(2),
      // width: '60%',
    },
  },
}));

function ModalBed() {
  const [necessaryInfo, setNecessaryInfo] = useState('')
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getVegetThunk());
  // }, [dispatch]);

  const vegetablesArray = useSelector((state) => state.vegetables);
  console.log(vegetablesArray);

  const classes = useStyles();
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
  // console.log(input.name);

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
    // event.preventDefault();
    console.log('>>>>>>>>createTheme');
    const response = await fetch('/modal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input })
    });
    // if (response.status === 200) {
    //   console.log('status 200');
    //   return history.push('/forum');
    // }
  }

  return (
      <div className={styles.wrapperModal}>
        <div className={styles.greeting}>
          <h3>А сейчас Вам нужно будет заполнить форму ниже, чтобы в любой момент можно было узнать что и на какой грядке растет</h3>
        </div>
        <div className={styles.centerDiv}>
          <div className={styles.divInput}>
            <Autocomplete

              id="combo-box-demo"
              options={vegetablesArray}
              getOptionLabel={(option) => option.vegetableName}
              style={{ width: '100%' }}
              renderInput={(params) => <TextField {...params} label="Название культуры" variant="outlined" name="name" onSelect={(e) => { changeInputs(e); findInfoAbout(e) }} />}
            />
          </div>
          <div className={styles.divInput}>
            <TextField className={styles.inputField} onChange={changeInputs} id="filled-basic" label="Сорт" name="grade" variant="filled" />
          </div>
          <div className={styles.divInput}>
            <TextField

              name="datePlant"
              onChange={changeInputs}
              id="date"
              label="Дата высадки"
              type="date"
              defaultValue="2020-10-01"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Accordion className={styles.accordion} style={{ margin: "0 auto" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Добавить комментарий о данной культуре</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={styles.accordionDetails}>
                <div className={styles.textField}>
                  <StyledTextField
                    name="comment"
                    onChange={changeInputs}
                    id="filled-multiline-static"
                    label=""
                    multiline
                    rows={4}
                    defaultValue=""
                    variant="filled"
                  />
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Button onClick={saveInfoGardenBed} variant="contained" style={{ margin: "3%" }}>Сохранить информацию о посаженных культурах</Button>
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
        </div>
      </div>
  )
}

export default ModalBed;