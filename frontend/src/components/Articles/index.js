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
      { articles?.map((article) => <div key={article._id}><Link to={`/articles/${article._id}`}>{article.title}</Link></div>)}
    </>
  )
}

export default Articles;