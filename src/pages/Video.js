import React, { useRef, useState } from "react";
import "./Video.css";
import Videofooter from "./components/footer/Videofooter";

function Video() {
  const videoRef = useRef(null);

  const [play, setplay] = useState(false);

  function handdlestart() {
    if (play) {
      videoRef.current.pause();
      setplay(false);
    } else {
      videoRef.current.play();
      setplay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdlestart}
        controls
        loop
        src=" https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946 "
      ></video>
      <Videofooter/>
    </div>
  );
}

export default Video;
