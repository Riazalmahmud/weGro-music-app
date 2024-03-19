import React from "react";
import { Link } from "react-router-dom";

const MusicComponent = ({musicList}) => {
  const {title, url, email, thumbnail,  id} = musicList
  return (

    <div className="col-span-1" >

      <div>
      <Link to={`/detailsMusic/${id}`}>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-64"
          src={thumbnail}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {email}
          </h5>
        </a>
        <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400">
         {title}
        </p>
        
      </div>
    </div>
    </Link>
      </div>
     
  </div>
  
  );
};

export default MusicComponent;
