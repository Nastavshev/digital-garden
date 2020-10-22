import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ws = new WebSocket('ws://localhost:3333');

function UserChat() {
  const currentChat = useSelector((state) => state.currentChat);
  const user = useSelector((state) => state.user);
  const [chat, setChat] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState();

  ws.onopen = () => {
    console.log('user ????????????', user.id);
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
            resp,
          ]);
        }
      })();
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }, []);

  useEffect(() => {
    ws.onmessage = (event) => {
      setChat((prev) => [
        ...prev,
        event.data,
      ]);
    };
  }, []);

  async function sendMessage(e) {
    e.preventDefault();
    const { id } = user;
    console.log('currentChat>>>>>>', currentChat);
    ws.send(JSON.stringify({ id, message }));
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
    <>
      <form onSubmit={sendMessage}>
        <div>
          {
            chat.map((el) => <p>{el}</p>)
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
