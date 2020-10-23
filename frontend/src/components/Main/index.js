import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthThunk, getVegetThunk, getArticleThunk } from '../../redux/action-creater';
import styles from './main.module.css';
import digital from '../../logo/smart.png';
import { Paper } from '@material-ui/core';
import logoMain from '../../logo/logoMain.jpg';

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
      {/* <div className={styles.image}>
        <img alt="logoMain" src={logoMain} className={styles.image} />
      </div> */}
      <div className={styles.main}>
        <div className={styles.greeting}>Мы рады приветствовать Вас в нашем приложении!
        <p>Краткое обучающее видео для новых пользователей</p>
        </div>
        <div className={styles.flex}>
          <div className={styles.gifDiv}>
            <img src="../gif/learn.gif" />
            {/* <img className={styles.image} alt="mainImage" src={mainImage} /> */}
          </div>
          <Paper elevation={3} className={styles.littleContainer}>
            <div className={styles.titlegreen}>С помощью нашего приложения Вы сможете:</div>
            <div className={styles.text}>- Создать удобную схему вашего участка</div>
            <div className={styles.text}>- Выполнять контроль и учет высаженных культур</div>
            <div className={styles.text}>- Ознакомиться со справочной информацией на тему сада и огорода</div>
            <img alt="digital" className={styles.avatar} src={digital} />
          </Paper>
        </div>
      </div>
    </>
  );
}

export default Main;
