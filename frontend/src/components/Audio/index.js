import React from 'react';
import AudioPlayer from "react-h5-audio-player";

function Audio() {

return (
    <>
    <AudioPlayer
      autoPlay
      src="https://tr1.muztron.com/a9bf9d7ea00410b97c0b766274a09fcd534f09c623207d83b96d7366ec0bf6b8/zvuki-prirody-atmosfera-derevni_(muztron.com).mp3"
      onPlay={e => console.log("onPlay")}
    // other props here
    />
    </>
  );
}
export default Audio;