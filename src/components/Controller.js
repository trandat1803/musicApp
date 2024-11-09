import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";

const Controller = () => {
  const { isPlaying, togglePlay, playNextTrack, playPreviousTrack } = useMusicPlayer();

  /*const handleStop = () => {
    togglePlay(); 
    if (isPlaying) togglePlay(); 
  };*/

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <button onClick={playPreviousTrack} style={buttonStyle}>Previous</button>
      <button onClick={togglePlay} style={buttonStyle}>
        {isPlaying ? "Pause" : "Play"}
      </button>
      <button onClick={playNextTrack} style={buttonStyle}>Next</button>
    </div>
  );
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

export default Controller;
