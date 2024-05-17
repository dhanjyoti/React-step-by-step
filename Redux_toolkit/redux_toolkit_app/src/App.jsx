import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Card from './pages/Card';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/card' element={<Card/>} />
      </Routes>
    </>
  )
}

export default App