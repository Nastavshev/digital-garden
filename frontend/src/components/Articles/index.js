import React, { useEffect } from 'react';
import styles from './articles.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { pageDefault } from '../../redux/action-creater';

function Articles() {
  const articles = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      dispatch(pageDefault())
    })()
  }, [])

  return (
     <>
    <h1>Популярные статьи</h1>
    <div className={styles.cards}>
      { articles?.map((article) => <div className={styles.card} key={article._id}><Link to={`/articles/${article._id}`}><h3>{article.title}</h3>
        <div>
          <img src={`/images/${article.imageArticle}`} />
        </div>
        <p>{article.text[0].paragraph}...</p>
      </Link>
      </div>)}
    </div>
    </>
  )
}

export default Articles;