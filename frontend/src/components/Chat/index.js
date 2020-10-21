import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Chat.module.css';
import AdminChat from './adminChat/index';

const ws = new WebSocket('ws://localhost:3333');

// ws.onopen = () => {
//   ws.send(JSON.stringify({ adminId: user.id, id: currentChat, message }));
// }

function Chat() {
  const user = useSelector((state) => state.user);
  const currentChat = useSelector((state) => state.currentChat);
  const [message, setMessage] = useState();
  const [error, setError] = useState();
  const [chat, setChat] = useState([]);

  useEffect(() => {
    ws.onmessage = (event) => {
      setChat((prev) => [
        ...prev,
        event.data,
      ]);
    };
  }, []);

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('/chat/messages');
        if (response.status == 200) {
          const resp = await response.json();
          setChat((prev) => [
            ...prev,
            resp,
          ]);
        }
      })();
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    const { id } = user;
    console.log('currentChat>>>>>>', currentChat);
    console.log('user.admin>>>>>>', user.admin);
    if (user.admin) {
      ws.send(JSON.stringify({ adminId: user.id, id: currentChat, message }));
    } else {
      ws.send(JSON.stringify({ id, message }));
    }
    try {
      await fetch('/chat/message', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          send: message,
        }),
      });
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }


  return (
    <div className={style.chat}>
      <form onSubmit={sendMessage}>
        <div>
          {
            user.admin ? <AdminChat chat={chat} setChat={setChat} />
              : chat.map((el) => <p>{el}</p>)
          }
        </div>
        <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
        <button type="submit">Отправить</button>
      </form>
      <div>{error}</div>
    </div>
  );
}

export default Chat;

/// //////////////////////////////////////////////////////////

// ws.onmessage = (e) => {
//   setChat(e);
// };

// function sendMessage(e) {
//   e.preventDefault();
//   (async () => {
//     await fetch('/chat/message', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         message,
//       }),
//     });
//   })();
// }

// useEffect(() => {
//   (async () => {
//     const response = await fetch('/chat/messages');
//     const resp = await response.json();
//     setChat((prev) => [
//       ...prev,
//       resp,
//     ]);
//   })();
// }, []);
