import React from 'react';
import AudioPlayer from "react-h5-audio-player";

function Audio() {


return (
    <>
    <AudioPlayer
      autoPlay
      src="https://s313iva.storage.yandex.net/get-mp3/df5c3a6a20b401347f33c9b9fac216bd/0005b231e05ad936/rmusic/U2FsdGVkX1_ONfV7WlO5eFwvWZVdr1EwoB9q8Hu5CY2e3T7MFpIGkhpWlGhRgUh2gDRTlgYCkgEZ2M0LHfH-FAdghe8GV5JJRY6Y3M_txLc/3f34a15a31054675eb68c154f18cb831808df31c8a37758d11b2ed1d29d609a1?track-id=52639101&play=false"
      onPlay={e => console.log("onPlay")}
    // other props here
    />
    </>
  );
}
export default Audio;