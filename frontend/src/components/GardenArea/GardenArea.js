import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GardenBed from '../GardenBed/GardenBed';
import { ADD_ELEMENT } from '../../redux/actionForGarden';

const style = {
  width: "60%",
  height: "500px",
  border: "3px solid black",
  backgroundColor: "green"
}

export default function GardenArea() {
  const dispatch = useDispatch();
  const stateCount = useSelector((state) => state.gardenBed.count)
  console.log("state GARDENAREA", stateCount.count);
  
  function addComponent() {
    dispatch(ADD_ELEMENT({ position: {x:0, y:0}, size: {width:"100px", height: "100px"} , status: false})); 
  }

  return (
    <>
      <button onClick={addComponent}>Добавить грядочку</button>
    <div style={{ width: '100%', height: '100%' }}>
    <div className="bounds" style={{ border: '2px solid grey', width: '90%', height: '70%', position: 'absolute' }}>
      <div className="offsetParent" style={{ width: '88%', height: '99%', position: 'absolute', left: '0px', top: '0px' }}>
      </div>
     {
        stateCount && stateCount.map((element, index) => {
        return (
          <div  key={index}>
            <GardenBed id={index} position={element.position} size={element.size} status={element.status} />
          </div>    
        )
      })
     } 
    </div>
  </div>
    </>
  )
}
