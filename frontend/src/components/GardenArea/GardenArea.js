import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GardenBed from '../GardenBed/GardenBed';
import { ADD_ELEMENT } from '../../redux/actionForGarden';
import RedAddButton from '../Button/RedAddButton';
import { SET_ANCHOR_STATE } from '../../redux/actionForGarden';
import GreenSaveButton from '../Button/GreenSaveButton';
import styles from './index.module.css';

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
    dispatch(ADD_ELEMENT({ position: {x:0, y:0}, size: {width:"100px", height: "100px"} , status: false, id: Math.random()})); 
  }

  function setStatus(e) {
    // const id = e.target.parentElement.id;
    dispatch(SET_ANCHOR_STATE(reduxFlagStatus))
  }

  return (
    <>
    <div style={{ width: '100%', height: '100%' }}>
    <div className="bounds" style={{ margin: "10px", border: '2px solid grey', width: '70%', height: '70%', position: 'absolute' }}>
      <div className="offsetParent" style={{ width: '88%', height: '99%', position: 'absolute', left: '0px', top: '0px' }}>
      </div>
     {
        stateCount && stateCount.map((element, index) => {
        return (
          <div  key={index}>
            <GardenBed index={index} id={element.id} position={element.position} size={element.size} status={element.status} />
          </div>    
        )
      })
     } 
    </div>
  </div>
    <div onClick={addComponent} ><RedAddButton /></div>
      <div onClick={setStatus}><GreenSaveButton /></div>
    </>
  )
}
