import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ws = new WebSocket('ws://localhost:3333');

function UserChat() {
  const user = useSelector((state) => state.user);
  const [chat, setChat] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState();

  // ws.onopen = () => {
  //   ws.send(JSON.stringify({ userId: user.id }));
  // };

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
      console.log('event.data >>>>>>>', event.data);
      const id = event.data.userId;
      const adminMessage = event.data.message;
      setChat((prev) => [
        ...prev,
        { id, message: adminMessage },
      ]);
      // };
      try {
        (async () => {
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
        })();
      } catch (err) {
        setError('ERROR', JSON.stringify(err));
      }
    };
  }, []);

  console.log('userChat >>>>>>', chat);
  // console.log('userChat >>>>>>', me);

  async function sendMessage(e) {
    e.preventDefault();
    const { id } = user;
    // console.log(' 47 id >>>>>>', id);
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
    <>
      <form onSubmit={sendMessage}>
        <div>
          {
            chat.map((el) => <p key={el.id}>{el.message}</p>)
          }
        </div>
        <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
        <button type="submit">Отправить</button>
      </form>
      <div>{error}</div>
    </>
  );
}

export default UserChat;
