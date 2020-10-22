import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GardenBed from '../GardenBed/GardenBed';
import { ADD_ELEMENT } from '../../redux/actionForGarden';
import RedAddButton from '../Button/RedAddButton';
import { SET_ANCHOR_STATE } from '../../redux/actionForGarden';
import GreenSaveButton from '../Button/GreenSaveButton';
import styles from './index.module.css';
import { Paper } from '@material-ui/core';

const style = {
  width: "60%",
  height: "500px",
  border: "3px solid black",
  backgroundColor: "green"
}

export default function GardenArea() {
  const dispatch = useDispatch();
  const stateCount = useSelector((state) => state.gardenBed.count);
  const reduxFlagStatus = useSelector((state) => state.gardenBed.status);

  function addComponent() {

    dispatch(ADD_ELEMENT({ position: { x: 0, y: 0 }, size: { width: "100px", height: "100px" }, status: false, id: Math.random() }));
  }

  function setStatus(e) {
    // const id = e.target.parentElement.id;
    dispatch(SET_ANCHOR_STATE(reduxFlagStatus))
  }

  return (
    <>
      <div className={styles.bounds} style={{ margin: "50px", border: '2px solid grey', width: '70.35%', height: '70%', position: 'absolute' }}>
        <div className="bounds" style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <div className="offsetParent" style={{ width: '88%', height: '99%', position: 'absolute', left: '0px', top: '0px' }}>
          </div>
          {
            stateCount && stateCount.map((element, index) => {
              return (
                <div key={index}>
                  <GardenBed index={index} id={element.id} position={element.position} size={element.size} status={element.status} />
                </div>
              )
            })
          }
        </div>
      </div>
      <Paper elevation={3} className={styles.littleContainer}>
        <p className={styles.title}><strong>Инструкция:</strong></p>
        <p>1. Для добавления элемента на поле нажмите на красную кнопку</p>
        <p>2. Редактировать размер грядки можно потянув за линию с красным пунктиром</p>
        <p>3. Расположить элементы можно перетянув их по полю с сеткой</p>
        <p>4. Для удаления грядки с поля нажмите на кнопку удаления</p>
        <p>5. Для сохранения элементов нажмите на зеленую кнопку с галочкой</p>
      </Paper>
      <div onClick={addComponent} className={styles.buttonRed}><RedAddButton /></div>
      <div onClick={setStatus} className={styles.greenRed}><GreenSaveButton /></div>
    </>
  )
}
