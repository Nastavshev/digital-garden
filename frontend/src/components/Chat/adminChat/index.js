import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setUserChat from '../../../redux/chatAction';
import style from './adminChat.module.css';

const ws = new WebSocket('ws://localhost:3333');

function AdminChat() {
  const currentChat = useSelector((state) => state.currentChat);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [adminChats, setAdminChats] = useState([]);
  const [flag, setFlag] = useState(true);
  const [error, setError] = useState();
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState();

  ws.onopen = () => {
    ws.send(JSON.stringify({ userId: user.id }));
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('/chat/admin');
        const resp = await response.json();
        setAdminChats(resp);
      })();
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }, []);

  useEffect(() => {
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setChat((prev) => [
        ...prev,
        data,
      ]);
    };
  }, [chat]);

  function handleSwitch(id) {
    setFlag(!flag);
    dispatch(setUserChat(id));
    adminChats.map((el) => {
      if (id === el.userId) {
        setChat(el.messages);
      }
    });
  }

  async function sendMessage(e) {
    e.preventDefault();
    ws.send(JSON.stringify({ userId: user.id, id: currentChat, message }));
  }
  
  return (
    <>
      {
        flag
          ? (
            <div>
              {adminChats.map((el) => (
                <h5 className={style.chats} id={el.userId} onClick={(e) => handleSwitch(e.target.id)}>
                  {el.userName}
                </h5>
              ))}
            </div>
          )
          : (
            <div className={style.content}>
              <form onSubmit={sendMessage}>
                <div className={style.content}>
                  {
                    chat.map((el) => <p className={user.id == el.id ? style.admin : style.notAdmin}>{el.message}</p>)
                  }
                </div>
                <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
                <button type="submit">Отправить</button>
                <button onClick={() => setFlag(!flag)} type="button">Назад</button>
              </form>
            </div>
          )
      }
      <div>{error}</div>
    </>
  );
}

export default AdminChat;
