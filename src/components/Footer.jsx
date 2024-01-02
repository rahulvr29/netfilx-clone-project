import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaGithubSquare, FaInstagramSquare } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="logo ">
        <h2 className='text-red-600 text-3xl font-bold '>NETFLIX</h2>
    </div>

    <div className="w-full flex flex-col items-center justify-center mt-5 mb-5 p-2 relative md:flex md:flex-row md:justify-between md:mt-1">
      {/* logo */}
      
    {/* Quick Links */}
    <div className='w-[30%] flex flex-col items-start justify-between gap-10 md:flex  md:flex-row md:gap-3 md:w-full md:p-5 '>
      <div className='text-white flex flex-col items-center justify-center gap-2 mb-2'>
          <h3 className='text-red-600 font-bold'>Quick Links</h3>
          <ul className='text-slate-500 cursor-pointer flex flex-col gap-2'>
            <Link to='/'><li>Home</li></Link>
            <Link to='/tvshows'><li>Tv Shows</li></Link>
            <Link to='/movie'><li>Movies</li></Link>
            <Link to='/account'><li>Account</li></Link>
          </ul>
      </div>
      <div className='text-white flex flex-col items-center justify-center gap-2 mb-2'>
          <h3 className='text-red-600 font-bold'>Movie to Watch</h3>
          <ul className='text-slate-500 cursor-pointer  flex flex-col gap-2'>
            <li>Upcoming</li>
            <li>Top Trending</li>
            <li>Popular</li>
            <li>Horror</li>
          </ul>
      </div>
      <div className='text-white flex flex-col items-center justify-center gap-2 mb-2 md:mb-0'>
          <h3 className='text-red-600 font-bold'>About Site</h3>
          <ul className='text-slate-500 cursor-pointer  flex flex-col gap-2 mb-5'>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
      </div>
    </div>


    {/* search box */}
    <div className="w-[60%] flex flex-col items-center justify-center md:flex md:w-full md:items-center">
      <h4 className="text-base mb-3 text-red-600 font-semibold">Subscribe Newsletter</h4>
      <div className="mailchimp mailchimp-dark">
        <div className=" flex">
          <input type="text" className="form-control mb-0 p-2 bg-transparent text-base text-red-600 border-red-600 placeholder-red-400" placeholder="Email" aria-describedby="button-addon2" />
          <div className="iq-button">
            <button type="submit" className="btn btn-sm bg-red-600 text-white p-2 rounded" id="button-addon2">Subscribe</button>
          </div>
        </div>
      </div>
      {/* social media links */}
      <div className="flex items-center mt-5">
        <span className="text-base me-2 text-red-600 font-semibold">Follow Us:</span>
        <ul className="p-0 m-0 list-unstyled widget_social_media flex gap-3 cursor-pointer">
          <li className="text-white hover:text-red-600 text-2xl hover:animate-bounce "><FaFacebookSquare /></li>
          <li className="text-white text-2xl hover:text-red-600 hover:animate-bounce"> <FaTwitterSquare/></li>
          <li className="text-white text-2xl hover:text-red-600 hover:animate-bounce"><FaGithubSquare/></li>
          <li className="text-white text-2xl hover:text-red-600 hover:animate-bounce"> <FaInstagramSquare/></li>
        </ul>
      </div>
    </div>
    
    </div>
    {/* footer bottom */}
    {/* app download */}
    </>
  );
};

export default Footer;
