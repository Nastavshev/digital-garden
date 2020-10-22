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

  // ws.onopen = () => {
  //   // console.log('user ????????????', user.id);
  //   ws.send(JSON.stringify({ userId: user.id }));
  // };

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('/chat/admin');
        // if (response.status === 200) {
        const resp = await response.json();
        setAdminChats(resp);
        // }
        // const resp = await response.json();
        // setError(JSON.stringify(resp))
      })();
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }, []);
  console.log('29 adminChats >>>>>>>>>', adminChats);

  useEffect(() => {
    if (chat.length) {
      ws.onmessage = (event) => {
        setChat((prev) => [
          ...prev,
          event.data,
        ]);
      };
    }
    // console.log('65 chat >>>>>>', chat);
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
                <h5 key={el.id} className={style.chats} id={el.userId} onClick={(e) => handleSwitch(e.target.id)}>
                  {el.userName}
                </h5>
              ))}
            </div>
          )
          : (
            <form onSubmit={sendMessage}>
              <div className={style.content}>
                {
                  chat.map((el) => <p key={el.id} className={style.message}>{el.message}</p>)
                }
              </div>
              <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
              <button type="submit">Отправить</button>
              <button
                onClick={() => setFlag(!flag)}
                type="button"
              >
                Назад
              </button>
            </form>
          )
      }
      <div>{error}</div>
    </>
  );
}

export default AdminChat;
