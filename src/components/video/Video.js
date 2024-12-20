import React, { useRef } from "react";
import "./Video.css";
import video_player from "../../assets/lifestrawGo.mp4";

function Video({ playState, setPlayState }) {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  return (
    <div
      className={`video-player ${playState ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video_player} autoPlay muted controls></video>
    </div>
  );
}

export default Video;
