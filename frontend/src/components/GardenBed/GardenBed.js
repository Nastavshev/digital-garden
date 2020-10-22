import React from 'react';
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POSITION, ADD_SIZE, SET_ANCHOR_STATE } from '../../redux/actionForGarden';
import styles from './index.module.css'
import WhiteAddButton from '../Button/WhiteAddButton';
import { useState } from 'react';
import ModalBed from '../ModalBed';

export default function GardenBed(props) {
  const { position, size, status } = props;
  const dispatch = useDispatch();
  const reduxFlagStatus = useSelector((state) => state.gardenBed.status);
  const reduxSize = useSelector((state) => state.gardenBed.count[props.id].size);
  const reduxPosition = useSelector((state) => state.gardenBed.count);
  const [openModalBed, setOpenModalBed] = useState(false);
  console.log(reduxSize);

  const style = {
    // backgroundColor: 'green',
    border: '3px dashed #fa4659',
    borderLeft: "none",
    borderTop: "none",
    userSelect: "none",
  };

  function setNewPlace(e, data) {
    const id = e.target.id;
    dispatch(ADD_POSITION({ position: { x: data.x, y: data.y }, size: reduxSize, status: reduxFlagStatus, id }));
  }

  function setSize(e, direction, ref) {
    const id = e.target.parentElement?.id;
    dispatch(ADD_SIZE({ position: reduxPosition, size: { width: ref.style.width, height: ref.style.height }, status: reduxFlagStatus, id }));
  }

  const handleClickOpenModalGardenBed = () => {
    console.log('на меня нажали')
    setOpenModalBed(true);
    console.log(openModalBed);
  };
  // function setStatus(e) {
  //   const id = e.target.parentElement.id;
  //   dispatch(SET_ANCHOR_STATE(reduxFlagStatus))
  // }

  return (
    <Rnd onDragStop={setNewPlace}
      className={styles.gardenBed}
      onResizeStop={setSize}
      style={style}
      bounds=".bounds"
      id={props.id}
      default={{ x: 0, y: 0 }}
      position={{ x: reduxPosition[props.id].position.x, y: reduxPosition[props.id].position.y }}
      size={{ width: reduxSize.width, height: reduxSize.height }}
      disableDragging={reduxFlagStatus}
      enableResizing={{
        top: false,
        right: !reduxFlagStatus,
        bottom: !reduxFlagStatus,
        left: false,
      }}
      minHeight='100px'
      minWidth='100px'
      maxHeight='99%'
      maxWidth='99%'
    >
      <div className={styles.whiteButtonOnGarden} onClick={handleClickOpenModalGardenBed}><WhiteAddButton /></div>
      <ModalBed setOpenModalBed={setOpenModalBed} openModalBed={openModalBed} />
      {/* <button onClick={setStatus}>{reduxFlagStatus === false? 'закрепить': 'изменить'}</button> */}
    </Rnd>
  )
}

