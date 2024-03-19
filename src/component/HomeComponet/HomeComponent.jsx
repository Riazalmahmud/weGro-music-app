import React, { createContext, useEffect, useState } from "react";
import MusicsComponent from "../all-music/musicsComponent/MusicsComponent";
import RecommendedList from "../recommadedlist/RecommadedList";
import "./HomeComponent.css";
import TandingComponent from "../all-music/Tanding/TandingComponent";
import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from "../all-music/AudioPlayer/AudioPlayer";
import AudioPlayers from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
//  Create context
export const MusicDataContext = createContext();
import beautiful from '../../assets/4-islamic-background-sounds-no-copyright-music-126058.mp3';

const HomeComponent = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [loadAllMusic, setAllMusic] = useState([]);

  //  Load data using useEffect
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch('https://raw.githubusercontent.com/Riazalmahmud/dumiapi/main/db.json')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data)
        setAllMusic(data.musicList)
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  //  Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  //  Filter music based on search query
  const filteredMusic = loadAllMusic.filter((music) => {
    return music.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      {/*  Provide context value */}
      <MusicDataContext.Provider value={filteredMusic}>
        <div className="hero-section bg-[#1C0357]">
          <form className="lg:w-[42rem] mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-[#1c2a50] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>


        {/* <AudioPlayer />
        <AudioPlayers
    autoPlay
    src={beautiful}
    onPlay={e => console.log("onPlay")}
    // other props here
  /> */}

   
        {/* Render MusicsComponent */}
        <MusicsComponent />

        {/* Render RecommendedList */}
        <RecommendedList />
        <TandingComponent />
      </MusicDataContext.Provider>
    </div>
  );
};

export default HomeComponent;
