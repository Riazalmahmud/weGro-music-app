import React, { useEffect, useState } from 'react';

const TandingComponent = () => {
    const [recommendedList, setRecommended] = useState([]);
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/Riazalmahmud/dumiapi/main/db.json")
        .then((data) => data.json())
        .then((data) => setRecommended(data.TendingMusic));
    }, []);
  const recommendedMusic  = recommendedList.sort((a, b) => b.viewCount - a.viewCount);
    return (
        <div>
        <div className="max-w-6xl mx-auto px-4 my-4">
          <h2 className="text-3xl font-bold py-4 text-white">Tending Music </h2>
          <div className="grid lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-4 grid-cols-1 gap-4">
          {recommendedMusic.slice(0, 6).map((recommended, index) => {
              const uniqueKey = `${index}`;
            return (
              <div className="col-span-1" key={recommended.id}>
                <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className="rounded-t-lg w-full h-72 "
                      src={recommended.thumbnail}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {recommended.email}
                      </h5>
                    </a>
                <p className="mb-3 font-normal  dark:text-gray-400 text-xl ">
         {recommended.title}
        </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    );
};

export default TandingComponent;