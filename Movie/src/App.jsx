import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route,  } from "react-router-dom";
import './App.css'
import Nav from './Com/Nav'
import Popular from './Com/Popular'
import Home from './Com/Home'
import TopRated from './Com/TopRated'
import Upcoming from './Com/Upcoming'
function App() {


  return (
    <>
   <Nav/>
   <Routes>
    <Route path='Popular' element={<Popular/>}></Route>
    <Route path='Home' element={<Home/>}></Route>
    <Route path='TopRated' element={<TopRated/>}></Route>
    <Route path='Upcoming' element={<Upcoming/>}></Route>
   </Routes>
    </>
  )
}

export default App
