import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/authContext";
import { db } from "../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { Footer } from "../components";

const MovieShowCard = ({show}) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, 'users', `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: show.id,
          title: show.title,
          img: show.backdrop_path,
        }),
      });
    } else {
      alert('Please log in to save a movie');
    }
  };

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  return (
    <>
    <div className="flex flex-col items-center relative group">
              <div className="">
              <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
                <img
                  className="w-[500px] h-[400px] object-contain p-5 ml-5 -mb-10 cursor-pointer"
                  src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`}
                  alt=""
                />
              </div>
              <div className="w-[500px] absolute top-[150px] transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ">
                <p className="text-white md:text-xl text-bold text-center">
                  {show.title}
                </p>
                <p className="px-10 text-white text-center opacity-60">
                  {truncateString(show?.overview, 150)}
                </p>
                <button className="absolute top-[120px] left-[45%]">
                <p onClick={saveShow}
                className="flex items-center justify-center ">
                    {
                      like?(
                        <FaHeart className=' text-center text-gray-300 text-xl'/> 
                      ): (
                        <FaRegHeart className='text-center text-xl text-gray-300'/>
                      )
                    }
                  </p>
                </button>
              </div>
            </div>
            
    </>
  )
}

export default MovieShowCard