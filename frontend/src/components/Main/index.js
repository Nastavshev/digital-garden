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
    <div className={styles.image}>
          <img src="/images/moonCalImg.jpg" className={styles.image} />
        </div>
      <div className={styles.main}>
        <div className={styles.gifDiv}>
          <img src="../gif/signup.gif" />
        </div>
      </div>
    </>
  );
}

export default Main;
