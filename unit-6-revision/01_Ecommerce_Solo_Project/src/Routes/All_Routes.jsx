import React from 'react'
import {Routes,Route} from "react-router-dom" 
import HomePage from '../Components/Home/HomePage'
import Not_Found from '../Components/Not_Found'

const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/*" element={<Not_Found/>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  )
}

export default All_Routes
