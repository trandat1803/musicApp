import useMusicPlayer from "../hooks/usePlayerProvider";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();
  
  return (
    <>
      {trackList.map((track, index) => (
        <div
        key={index}
        style={{
          cursor: "pointer",
          padding: "10px",
          borderBottom: "1px solid #ddd",
          backgroundColor: track.name === currentTrackName ? "#f0f0f0" : "transparent",
          fontWeight: track.name === currentTrackName ? "bold" : "normal",
        }}
        onClick={() => playTrack(index)}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{track.name}</span>
          {track.name === currentTrackName && isPlaying && (
            <span style={{ color: "green", fontSize: "12px" }}>Playing...</span>
          )}
        </div>
        </div>
      ))}
    </>
  );
  };
  
  export default TrackList;