import React, { useState, useEffect } from 'react';

function Secret() {
  const [data, setData] = useState('Идет загрузка...');
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/secret');
        const json = await response.json();
        console.log(data, 'data>>>>>>');
        console.log(json, 'json>>>>>>');
        setData(JSON.stringify(json));
      } catch (err) {
        console.error('ERROR ENTER SECRET PAGE', err);
        setData('ERROR ENTER SECRET PAGE');
      }
    })();
  }, []);
  return (
    <>
      <h1>{data}</h1>
    </>
  );
}

export default Secret;
