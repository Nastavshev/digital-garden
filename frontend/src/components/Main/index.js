import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMonthThunk, getVegetThunk, getArticleThunk } from '../../redux/action-creater';
import styles from './main.module.css';
import mainImage from '../../logo/3387351.jpg';


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
      <div className={styles.main}>
        <br/>
        <h4>Мы рады приветствовать Вас в нашем приложении</h4>
        <p>Краткое обучающее видео для новых пользователей</p>
        <div className={styles.gifDiv}>
      {/* <img src="../gif/learn.gif" /> */}
      {/* <img className={styles.image} alt="mainImage" src={mainImage} /> */}
      </div>
      </div>
    </>
  );
}

export default Main;
