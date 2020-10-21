import React from 'react';
import { Rnd } from "react-rnd";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POSITION, ADD_SIZE, SET_ANCHOR_STATE } from '../../redux/actionForGarden';

export default function GardenBed(props) {
  const {position, size, status} = props;
  const dispatch = useDispatch();
  const reduxFlagStatus = useSelector((state) => state.gardenBed.status);
  const reduxSize = useSelector((state) => state.size );
  const reduxPosition = useSelector((state) => state.position);

  const style = {
    backgroundColor: 'green',
    border: '3px dashed red',
    borderLeft: "none",
    borderTop: "none",
    userSelect: "none",
  };
  
  function setNewPlace(e, data) {
    const id = e.target.id;
    dispatch(ADD_POSITION({ position: {x: data.x, y: data.y}, size: reduxSize, status: reduxFlagStatus, id } ));
  }

  function setSize(e, direction, ref) {
    const id = e.target.parentElement?.id;
    dispatch(ADD_SIZE({ position: reduxPosition, size: { width: ref.style.width, height: ref.style.height }, status: reduxFlagStatus, id }));
  }

  function setStatus(e) {
    const id = e.target.parentElement.id;
    dispatch(SET_ANCHOR_STATE(reduxFlagStatus))
  }

  return (
    <Rnd onDragStop={setNewPlace}
      onResizeStop={setSize}
      style={style}
      bounds=".bounds"
      id={props.id}
      // default={{x: 0, y: 0}}
      // position={ {x: reduxPosition[props.id].x, y: reduxPosition[props.id].y }}
      disableDragging={ reduxFlagStatus }
      enableResizing={{
        top: false,
        right: !reduxFlagStatus,
        bottom: !reduxFlagStatus,
        left: false,
      }}
      minHeight= '100px'
      minWidth='100px'
      maxHeight= '99%'
      maxWidth='99%'
    >
      <button onClick={setStatus}>{reduxFlagStatus === false? 'закрепить': 'изменить'}</button>
    </Rnd>
  )
}

