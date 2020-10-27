import React, { useState } from 'react';
import { Rnd } from 'react-rnd';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { ADD_POSITION, ADD_SIZE, DELETE_GARDENBED } from '../../redux/actionForGarden';
import styles from './index.module.css';
import WhiteAddButton from '../Button/WhiteAddButton';
import RedAddButton from '../Button/RedAddButton';
import ModalBed from '../ModalBed';

export default function GardenBed(props) {
  const { position, size, status } = props;
  const { idGarden } = useParams();
  const dispatch = useDispatch();
  const reduxFlagStatus = useSelector((state) => state.gardenBed.status);
  const reduxSize = useSelector((state) => state.gardenBed.count[props.index].size);
  const reduxPosition = useSelector((state) => state.gardenBed.count[props.index].position);
  const [openModalBed, setOpenModalBed] = useState(false);

  const style = {
    border: '3px dashed #fa4659',
    borderLeft: 'none',
    borderTop: 'none',
    userSelect: 'none',
  };

  function setNewPlace(e, data) {
    const { id } = e.target;
    dispatch(ADD_POSITION({
      position: { x: data.x, y: data.y }, size: reduxSize, status: reduxFlagStatus, id,
    }));
  }

  function setSize(e, direction, ref) {
    const { id } = e.target.parentElement;
    dispatch(ADD_SIZE({
      position: reduxPosition, size: { width: ref.style.width, height: ref.style.height }, status: reduxFlagStatus, id,
    }));
  }

  const handleClickOpenModalGardenBed = () => {
    setOpenModalBed(true);
  };

  function deleteGardenBed(e) {
    const { id } = e.target.closest('div').parentElement.parentElement;
    dispatch(DELETE_GARDENBED(id));
  }

  return (
    <Rnd
      onDragStop={setNewPlace}
      className={styles.gardenBed}
      onResizeStop={setSize}
      style={style}
      bounds=".bounds"
      id={props.id}
      position={{ x: reduxPosition.x, y: reduxPosition.y }}
      size={{ width: reduxSize.width, height: reduxSize.height }}
      enableResizing={{
        top: false,
        right: !reduxFlagStatus,
        bottom: !reduxFlagStatus,
        left: false,
      }}
      disableDragging={reduxFlagStatus}
      minHeight="100px"
      minWidth="100px"
      maxHeight="99%"
      maxWidth="99%"
    >
      <div className={styles.littleFlex}>
        <div className={styles.whiteButtonOnGarden} onClick={handleClickOpenModalGardenBed}><WhiteAddButton /></div>
        <div className={styles.deleteGarden}><DeleteForeverIcon onClick={deleteGardenBed} /></div>
      </div>
      <ModalBed idGarden={idGarden} setOpenModalBed={setOpenModalBed} id={props.id} openModalBed={openModalBed} />
    </Rnd>
  );
}
