import React from 'react'
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from '../context/authContext'
import { Footer, Navbar } from '../components'
import ProtectedRoute from '../components/ProtectedRoute'
import { Account, Home, Login, Movie, SignUp, TvShows } from '../pages'

const Routers = () => {
  return (
    <>
    <AuthContextProvider>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movie" element={<Movie />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/footer" elment={<Footer/>}/>
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
        
      </AuthContextProvider>
    </>
  )
}

export default Routers