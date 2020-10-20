import React from 'react';
import styles from './articles.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Articles() {

  const articles = useSelector((state) => state.articles);



  return (
    <>
      { articles?.map((article) => <div key={article._id}><Link to={`/articles/${article._id}`}>{article.title}</Link></div>)}
    </>
  )
}

export default Articles;