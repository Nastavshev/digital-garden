import React from 'react';
import AudioPlayer from "react-h5-audio-player";

function Audio() {


return (
    <>
    <AudioPlayer
      autoPlay
      src="https://muztron.com/pages/f-186234/b/5f1ef984689ab43b455e80a7a601d916519810b5147768eb85a45731012240a1"
      onPlay={e => console.log("onPlay")}
    // other props here
    />
    </>
  );
}
export default Audio;
