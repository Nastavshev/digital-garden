import React from 'react';
import AudioPlayer from "react-h5-audio-player";

function Audio() {


return (
    <>
    <AudioPlayer
      autoPlay
      src="https://mc.yandex.ru/clmap/65755567?page-url=https%3A%2F%2Fzvukogram.com%2Fcategory%2Fzvuki-travyi%2F&pointer-click=rn%3A138863584%3Ax%3A37864%3Ay%3A23301%3At%3A811%3Ap%3AAAAA5AA1AA1%3AX%3A396%3AY%3A924&browser-info=ti%3A4%3Arqnl%3A1%3Ast%3A1603300655%3Au%3A16033005741068262097%3App%3A3629563401"
      onPlay={e => console.log("onPlay")}
    // other props here
    />
    </>
  );
}
export default Audio;