import React, { useEffect, useState } from 'react';
import beautiful from '../../../assets/4-islamic-background-sounds-no-copyright-music-126058.mp3';
import trinix from '../../../assets/image/slider.jpg';
import {
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
  } from 'react-icons/io5';
export const tracks = [
    {
      title: 'Trinix ft Rushawn – Its a beautiful day',
      src: beautiful,
      author: 'Trinix ft Rushawn',
      thumbnail: trinix,
    },
    {
      title: 'Trinix ft Rushawn – Its a beautiful day',
      src: 'https://artlist.io/royalty-free-music/song/murmuring/129283',
      author: 'Trinix ft Rushawn',
      thumbnail: trinix,
    },
    // ...
  ];
const Controls = ({ audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlayPause = () => {
        setIsPlaying((prev) => !prev);
      };


      useEffect(() => {
        if (isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }, [isPlaying, audioRef]);
    return (
        <div>
          <div className="controls-wrapper">
      <div className="controls gap-4 flex items-center w-full mx-full">
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
        </div>
    );
};

export default Controls;