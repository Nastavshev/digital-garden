import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import setUserChat from '../../../redux/chatAction';

function AdminChat(props) {
  const { chat, setChat } = props;
  console.log('chat !!!!!!!!!!!', chat);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [adminChats, setAdminChats] = useState([]);
  // const [currentChat, setCurrentChat] = useState({});
  const [flag, setFlag] = useState(true);

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

  function handleSwitch(id) {
    setFlag(!flag);
    dispatch(setUserChat(id));
    adminChats.map((el) => {
      if (id === el.userId) {
        setChat(el.messages);
      }
    });
  }

  return (
    <>
      {flag
        ? <ul>{adminChats.map((el) => <li id={el.userId} onClick={(e) => handleSwitch(e.target.id)}>{el.userId}</li>)}</ul>
        : chat.map((el) => <p>{el}</p>)}
      <div>{error}</div>
    </>
  );
}

export default AdminChat;
