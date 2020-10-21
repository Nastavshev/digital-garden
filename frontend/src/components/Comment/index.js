import React, { useState, useEffect } from 'react';
import { Link, StaticRouter, useParams } from 'react-router-dom';
import styles from './comment.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber, updateArrayComment } from '../../redux/action-creater';
import Button from '@material-ui/core/Button';

function Comment(props) {
  const dispatch = useDispatch();
  const { pageNumber } = useSelector(state => state.pageNumber);
  // console.log(pageNumber);
  const { idArticle } = props;
  // console.log(idArticle);
  const [paginatArray, setPaginatArray] = useState([])
  const [showForm, setShowForm] = useState(false)
  // console.log(showForm);

  const [messages, setMessages] = useState([])
  console.log(messages);
  const [input, setInput] = useState('');

  function changeInputs(event) {
    setInput({
      ...input,
      message: event.target.value,
    })
  }

  function changePage(page) {
    dispatch(setPageNumber(page))
  }

  useEffect(() => {
    (async () => {
      const response = await fetch(`/articles/${idArticle}/${pageNumber}`)
      const result = await response.json();
      setPaginatArray(result.paginatArray);
      setMessages(result.commentFromBD);
    })()
  }, [pageNumber])

  async function createMessage(event) {
    event.preventDefault();
    const response = await fetch(`/articles/${idArticle}/newMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: input.message,
        id: idArticle
      })
    });
    const result = await response.json();
    // console.log(result);
    if (response.status === 200) {
      // console.log(response.status);
      dispatch(updateArrayComment(result.newComment));
      setMessages([...messages, result.newComment])
    }
  }


  return (
    <>
      <div className={styles.messageWrapper}>
        <h2>Здесь можно читать комментарии по данной теме и оставлять свои</h2>
        <>
          {showForm
            ?
            <div>
              <input placeholder="текст сообщения" name="message" onChange={changeInputs} />
              <button type="button" onClick={(e) => { createMessage(e); setShowForm(state => !state) }}>Отправить комментарий</button>
            </div>
            :
            <Button variant="contained" onClick={() => setShowForm(state => !state)}>Оставить комментарий по этой теме</Button>
          }
        </>
        <>
          <div className={styles.paginWrapper}>Выбор страницы:
            {paginatArray?.map((element) =>
            <div className={styles.page} key={element.page}>
              <button onClick={() => changePage(`${element.page}`)}>
                <span>{element.page}</span>
              </button>
            </div>)}
          </div>
        </>
      </div >
      <h3>Комментарии: </h3>
      <div className={styles.messages}>
        {messages?.map((element) =>
          <div key={element._id} className={styles.messageCard}>
            <div className={styles.userField} key={element._id}>Имя: {element.authorName}
              <br />
            Город: {element.city}</div>
            <div className={styles.messageField}>
              <div className={styles.messageDate}>Опубликовано: {element.commentDate}</div>
              <div>{element.commentText}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Comment;