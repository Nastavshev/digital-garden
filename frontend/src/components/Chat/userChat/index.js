import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import styles from './userChat.module.css';
import style from './userChat.module.css';

const ws = new WebSocket('ws://localhost:3333');

function UserChat() {
  const user = useSelector((state) => state.user);
  const [chat, setChat] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState();

  ws.onopen = () => {
    console.log('WS_OPEN ????????????');
    ws.send(JSON.stringify({ userId: user.id }));
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('/chat/messages');
        if (response.status == 200) {
          const resp = await response.json();
          setChat((prev) => [
            ...prev,
            ...resp,
          ]);
        }
      })();
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }, []);

  useEffect(() => {
    // if (chat.length) {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setChat((prev) => [
        ...prev,
        data,
      ]);
      console.log('data >>>>>>>>>>', data);

      try {
        (async () => {
          await fetch('/chat/message', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              data,
            ),
          });
        })();
      } catch (err) {
        setError('ERROR', JSON.stringify(err));
      }
    };
    console.log('chat >>>>>>>>>>', chat);
  }, [chat]);

  console.log('userChat >>>>>>', chat);
  // console.log('userChat >>>>>>', me);

  async function sendMessage(e) {
    e.preventDefault();
    const { id } = user;
    // console.log('currentChat>>>>>>', currentChat);
    ws.send(JSON.stringify({ id, message }));
    try {
      await fetch('/chat/message', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          message,
        }),
      });
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }

  return (
    <div className={style.content}>
      <form className={styles.chat} onSubmit={sendMessage}>
        <div className={styles.chatN}>
          {
            chat.map((el) => <p className={user.id == el.id ? style.admin : style.notAdmin}>{el.message}</p>)
          }
        </div>
        <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
        <Button color="primary" type="submit">Отправить</Button>
      </form>
      <div>{error}</div>
    </div>
  );
}

export default UserChat;
