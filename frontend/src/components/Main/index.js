import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthThunk, getVegetThunk, getArticleThunk } from '../../redux/action-creater';
import styles from './main.module.css';


function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMonthThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getVegetThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getArticleThunk());
  }, [dispatch]);

  return (
    <>
      <div>Mainnnnnnnnnn</div>

      <div className={styles.main}>Main</div>

      <div className={styles.gifDiv}>
        {/* <img src="../images/screen.gif" /> */}
      </div>
    </>
  )
}

export default Main;
