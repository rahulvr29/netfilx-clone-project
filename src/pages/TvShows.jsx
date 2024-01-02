import axios from "axios";
import React, { useEffect, useState } from "react";

import { tvShows } from "../requestKey";

import TvShowCard from "./TvShowCard";
import { Footer } from "../components";

const TvShows = () => {
  const [tvShow, setTvShow] = useState([]);

  useEffect(() => {
    axios.get(tvShows).then((response) => {
      setTvShow(response.data.results);
    });
  }, []);

  console.log(tvShow);

  

  return (
    <>
      <div className="w-full text-red-600 relative flex items-center ">
        <div>
          <h1 className="absolute top-[100px] left-[42%] text-2xl text-bold">
            Tv Shows
          </h1>
        </div>
        <div className="flex flex-wrap justify-center items-center absolute top-[150px] left-0 ">
          {tvShow.map((e, i) => (
            <TvShowCard key={i} show={e}/>
          ))}
        </div>
      </div>
      <div className="hidden">
      <Footer/>
    </div>
    </>
  );
};

export default TvShows;
