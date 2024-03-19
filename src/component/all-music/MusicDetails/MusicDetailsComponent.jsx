import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import beautiful from '../../../assets/4-islamic-background-sounds-no-copyright-music-126058.mp3';
import AudioPlayers from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
const MusicDetailsComponent = () => {
  const { id } = useParams();
  const [music, setMusic] = useState(null);

  useEffect(() => {
   
    fetch("https://raw.githubusercontent.com/Riazalmahmud/dumiapi/main/db.json")
    .then((data) => data.json())
    .then((data) => {
      const findData = data.musicList.find((res) => res.id == id);
      // Get previous data from localStorage
      const localStorageData = JSON.parse(localStorage.getItem("musicDataID")) || [];
      
      // Check if the ID already exists in localStorageData
      const existingIndex = localStorageData.findIndex(item => item.id === findData.id);
      if(existingIndex === -1) { 
        const updatedData = [...localStorageData, findData];
        if (updatedData.length > 7) {
          updatedData.splice(0, updatedData.length - 6);
        }
        localStorage.setItem("musicDataID", JSON.stringify(updatedData));
      }
      
      setMusic(findData);
    })
    .catch((error) =>
      console.error("Error fetching product details:", error)
    );
  }, [id]);

  if (!music) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 my-4">
        <div className="grid  grid-cols-1 ">
          <div className="col-span-1">
            <div className=" flex bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              
              <div className="grid grid-cols-4">
              <div className="col-span-2">
              <a href="#" >
                <img className="rounded-t-lg w-full" src={music.thumbnail} alt="" />
              </a>
              </div>
              <div className="col-span-2">
              <div className="p-5 w-full">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {music.email}
                  </h5>
                </a>
                <p className="mb-3  text-gray-700 text-3xl font-bold dark:text-gray-400">
                  {music.title}
                </p>
                <p className="mb-3  text-gray-700 text-xl font-bold dark:text-gray-400">
                  {music.title}
                </p>
                <p className="mb-3  text-gray-700 text-xl font-bold dark:text-gray-400">
                  {music.title}
                </p>
              </div>

              <AudioPlayers
    autoPlay
    src={beautiful}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
              </div>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicDetailsComponent;
