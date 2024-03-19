import React, { useContext, useEffect, useState } from "react";
import musicData from "../../../data/music.json";
import MusicComponent from './../music/MusicComponent';
import { MusicDataContext } from "../../HomeComponet/HomeComponent";
const MusicsComponent = () => {
  const musicData = useContext(MusicDataContext);
  return (
    <div className="max-w-6xl mx-auto px-4 my-4">
      <div className="grid lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-4 grid-cols-1 gap-4">
       {
        musicData.map(musicData => <MusicComponent key={musicData.id} musicList={musicData}></MusicComponent>)
       }
      </div>
    </div>
  );
};

export default MusicsComponent;
