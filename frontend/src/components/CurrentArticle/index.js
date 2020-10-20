import React from 'react';
import styles from './currentArticle.module.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Comment from '../Comment';

function CurrentArticle() {
  const { idArticle } = useParams();

  const articles = useSelector((state) => state.articles);
  let currentArt = articles.find((element) => element._id === idArticle)
  // console.log(currentArt);

  return (
    <>
    <div className={styles.wrapperArticle}>
      <h1>{currentArt.title}</h1>
      <img src={`/images/${currentArt.imageArticle}`} />
      {currentArt.text.map((element) => <p key={element._id}>{element.paragraph}</p>)}
    </div>
    <Comment idArticle={idArticle}/>
    </>
  )
}

export default CurrentArticle;