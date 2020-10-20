import React, { useState } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';

function CreateMessage() {
    const history = useHistory();
    const [input, setInput] = useState('');


    function changeInputs(event) {
        setInput({
            ...input,
            message: event.target.value,
        })
        // console.log(input);
    }


    async function createMessage(event) {
        const url = window.location.href;
        console.log(url);
        let idArticle = url.split('/')[4]
        console.log(idArticle);
        // const params = new URLSearchParams(search);
        event.preventDefault();
        const response = await fetch(`/articles/:idArticle/newMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: input.message,
                id: idArticle
            })
        });
        // console.log(response.status);
        if (response.status === 200) {
            // console.log('privet');
            // console.log(idTheme);
              return history.push(`/articles/${idArticle}`);
        }
    }

    return (
        <>
            <input placeholder="текст сообщения" name="message" onChange={changeInputs} />
            <button type="button" onClick={createMessage}>Отправить сообщение</button>
            {/* <button type="button">Отправить сообщение</button> */}
        </>
    )
}

export default CreateMessage;