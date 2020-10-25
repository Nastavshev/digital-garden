import React, { useState, useEffect } from 'react';
import { Link, StaticRouter, useParams } from 'react-router-dom';
import styles from './comment.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber, updateArrayComment } from '../../redux/action-creater';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { modalLogin } from '../../redux/modalLoginActions';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const StyledTextField = withStyles({
  root: {
    width: '70%',
    // marginLeft: '20%',
  },
})(TextField);

function Comment(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { pageNumber } = useSelector(state => state.pageNumber);
  const { idArticle } = props;
  const [paginatArray, setPaginatArray] = useState([])
  const [showForm, setShowForm] = useState(false)
  const isAuthenticated = useSelector(state => state.isAuthenticated)
  const { userName, email } = useSelector(state => state.user)
  const [messages, setMessages] = useState([])

  // messages.map((element) => {
  //   element.commentDate = element.commentDate.split(" ")
  //   return element
  // })

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
      console.log(messages);
      // let newArray = messages.map((element) => {
      //   element.commentDate = element.commentDate.split(" ")
      //   return element
      // })
      // setMessages(newArray);
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
    if (response.status === 200) {
      dispatch(updateArrayComment(result.newComment));
      setMessages([...messages, result.newComment])
    }
  }


  return (
    <>
      <div className={styles.messageWrapper}>
        <h2>Здесь можно читать комментарии по данной теме и оставлять свои</h2>
        <>
          {isAuthenticated
            ?
            <>
              {showForm
                ?
                <div className={styles.commentDivWrapper}>
                  <div>
                    <StyledTextField
                      name="comment"
                      onChange={changeInputs}
                      id="filled-multiline-static"
                      label=""
                      multiline
                      rows={4}
                      defaultValue=""
                      variant="filled"
                      placeholder="текст сообщения" name="message" onChange={changeInputs}
                    />
                  </div>
                  <div>
                    <Button variant="contained" type="button" onClick={(e) => { createMessage(e); setShowForm(state => !state) }}>Отправить комментарий</Button>
                  </div>
                </div>
                :
                <Button variant="contained" onClick={() => setShowForm(state => !state)}>Оставить комментарий по этой теме</Button>
              }
            </>
            : <div className={styles.divLink}>Для отправки комментария вам необходимо <Button size="small" variant="contained" color="success" className={styles.buttonLogin} onClick={() => dispatch(modalLogin())}>авторизоваться</Button></div>
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
      <br />
      <div className={styles.messages}>
        {messages && messages.map((element) =>
          <div key={element._id} className={styles.messageCard}>
            {/* <div className={styles.userField} key={element._id}>Имя: {userName} <br />
            Опубликовано: {element.commentDate[2]} {element.commentDate[1]} {element.commentDate[3]}</div> */}
            <div className={styles.messageField}>
              <div>{element.commentText}</div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Comment;
