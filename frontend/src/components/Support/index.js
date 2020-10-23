import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSupport } from '../../redux/supportAction';

function Support() {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  console.log('7 flag!!!!!!!!!!!!!!', flag);

  function getSupport() {
    setFlag(!flag);
    dispatch(setSupport(flag));
  }
  // dispatch(setSupport(setFlag(!flag)))
  return (
    <>
      <button type="button" onClick={getSupport}>Поддержка</button>
    </>
  );
}

export default Support;
