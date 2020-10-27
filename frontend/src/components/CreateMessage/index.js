import React, { useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';

function CreateMessage() {
  const history = useHistory();
  const [input, setInput] = useState('');

  function changeInputs(event) {
    setInput({
      ...input,
      message: event.target.value,
    });
  }

  async function createMessage(event) {
    const url = window.location.href;
    const idArticle = url.split('/')[4];
    event.preventDefault();
    const response = await fetch('/articles/:idArticle/newMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: input.message,
        id: idArticle,
      }),
    });
    if (response.status === 200) {
      return history.push(`/articles/${idArticle}`);
    }
  }

  return (
    <>
      <input placeholder="текст сообщения" name="message" onChange={changeInputs} />
      <button type="button" onClick={createMessage}>Отправить сообщение</button>
    </>
  );
}

export default CreateMessage;
