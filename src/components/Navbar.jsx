import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-red-600 lg:text-4xl font-bold cursor-pointer text-3xl">
          NETFLIX
        </h1>
      </Link>
      
      
        <div className="flex items-center">
        {/* <Link to="/">
          <button className="text-white hover:text-red-500 font-bold pr-4">Home </button>
        </Link> */}
        <Link to="/tvshows">
        <button className="text-white text-base hover:text-red-500 pr-2 font-bold ">
          TvShows
        </button>
        </Link>
        <Link to="/movie">
        <button className="text-white hover:text-red-500 font-bold pr-4">
          Movies
        </button>
        </Link>
      
      {user?.email ? (
        <div className="w-full flex items-center justify-end">
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      )}
        </div>
    </div>
  );
};

export default Navbar;
