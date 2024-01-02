import axios from "axios";
import React, { useEffect, useState } from "react";
import { movieShows } from '../requestKey'
import MovieShowCard from "./MovieShowCard";
import { Footer } from "../components";

const Movie = () => {
  const [movieShow, setTvShow] = useState([])

  useEffect(() => {
    axios.get(movieShows).then((response) => {
      setTvShow(response.data.results);
    });
  }, []);

  console.log(movieShow)
  


  return (
    <>
    <div className="w-full text-red-600 relative flex items-center "> 
      <div>
      <h1 className="absolute top-[100px] left-[40%] text-2xl text-bold">Movie Shows</h1>
      </div>
        <div  className="flex flex-wrap justify-center items-center absolute top-[150px] left-0 ">
      
          {
            movieShow.map((e,i)=>(
              <MovieShowCard key={i} show={e}/>
            ))
          }
        </div>
    </div>
    <div className="flex hidden">
      <Footer/>
    </div>
    </>
  )
}

export default Movie