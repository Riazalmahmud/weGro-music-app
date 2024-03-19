import { useEffect, useRef, useState } from "react";
import Controls, { tracks } from "../Controls/Controls";
import DisplayTrack from "../DisplayTrack/DisplayTrack";
import ProgressBar from "../ProgressBar/ProgressBar";
const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const audioRef = useRef();


  useEffect(()=>{
  fetch("http://localhost:8000/result")
  .then(res=> res.json())
  .then((data)=>{
  setCurrentTrack(data)
  })
  }, [])
  return (
    <div className="audio-player">
      <div className="inner">
        <DisplayTrack currentTrack={currentTrack} audioRef={audioRef} />
        <Controls audioRef={audioRef} />
        <ProgressBar />
      </div>
    </div>
  );
};
export default AudioPlayer;
