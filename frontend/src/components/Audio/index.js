import React from 'react';
import AudioPlayer from "react-h5-audio-player";

function Audio() {


return (
    <>
    <AudioPlayer
      autoPlay
      src="https://s21vla.storage.yandex.net/get-mp3/9ede1a44c4dfb06e4be9fd9f05bcdbed/0005b244e73258cc/rmusic/U2FsdGVkX18-ELTBtVBfIfWexRsiUW7dM3ClU6StKJcE7K4c7Xo8HJaOVkK5HlBbEnUhzHcr-TJi7fPINo5RcWjEx4IY8kjOSSjo3Usldv8/eb4e679ac76ec7ec5af9941e59a8909dd8e7904c58261767138d236839c9282f?track-id=36318979&play=false"
      onPlay={e => console.log("onPlay")}
    // other props here
    />
    </>
  );
}
export default Audio;