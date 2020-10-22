import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setUserChat from '../../../redux/chatAction';

const ws = new WebSocket('ws://localhost:3333');

function AdminChat() {
  const currentChat = useSelector((state) => state.currentChat);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [adminChats, setAdminChats] = useState([]);
  const [flag, setFlag] = useState(true);
  const [error, setError] = useState();
  const [chat, setChat] = useState();
  const [message, setMessage] = useState();

  ws.onopen = () => {
    console.log('user ????????????', user.id);
    ws.send(JSON.stringify({ userId: user.id }));
  };

  useEffect(() => {
    try {
      (async () => {
        const response = await fetch('/chat/admin');
        // if (response.status === 200) {
        const resp = await response.json();
        setAdminChats(resp);
        console.log('adminChats >>>>>>>>>', adminChats);
        // }
        // const resp = await response.json();
        // setError(JSON.stringify(resp))
      })();
    } catch (err) {
      setError('ERROR', JSON.stringify(err));
    }
  }, []);

  useEffect(() => {
    ws.onmessage = (event) => {
      console.log('event >>>>>>>>>>>>>>>>', event);
      if (currentChat) {
        setChat((prev) => [
          ...prev,
          event.data,
        ]);
      }
    };
  }, []);

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
    // console.log('currentChat>>>>>>', currentChat);
    // console.log('user.admin>>>>>>', user.admin);
    ws.send(JSON.stringify({ userId: user.id, id: currentChat, message }));
  }

  return (
    <>
      {
        flag
          ? (
            <div>
              {adminChats.map((el) => (
                <h5 id={el.userId} onClick={(e) => handleSwitch(e.target.id)}>
                  {el.userId}
                </h5>
              ))}
              <button type="button">Назад</button>
            </div>
          )
          : (
            <form onSubmit={sendMessage}>
              <div>
                {
                  chat.map((el) => <p>{el}</p>)
                }
              </div>
              <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
              <button type="submit">Отправить</button>
            </form>
          )
      }
      <div>{error}</div>
    </>
  );
}

export default AdminChat;

// (
//   <>
//     {chat.map((el) => <p>{el}</p>)}
//     <button type="button" onClick={setFlag(!flag)}>Назад</button>
//   </>
// )
