import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Chat.module.css';
import AdminChat from './adminChat/index';
import UserChat from './userChat';

function Chat() {
  const user = useSelector((state) => state.user);
  return (
    <div className={style.content}>
      <div className={style.chat}>
        {
          user.admin ? <AdminChat /> : <UserChat />
        }
      </div>
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
