import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Home from './Home';
import TypeMaster from './TypeMaster';
import Result from './Result';

const AllRoute = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/TypeTesting' element={<TypeMaster/>}/>
        <Route path='/result' element={<Result/>}/>
    </Routes>
  )
}

export default AllRoute