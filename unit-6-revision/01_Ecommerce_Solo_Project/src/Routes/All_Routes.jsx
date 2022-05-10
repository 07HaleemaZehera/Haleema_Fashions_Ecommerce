import React from 'react'
import {Routes,Route} from "react-router-dom" 
import HomePage from '../Components/Home/HomePage'
import Mens from "../Components/Products/Mens"
import Not_Found from '../Components/Not_Found'
import Kids from '../Components/Products/Kids'
import Womens from '../Components/Products/Womens'
import Products from '../Components/Products/Products'


const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/*" element={<Not_Found/>}></Route>
        <Route path="/men" element={<Mens/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/womens" element={<Womens/>}></Route>
        <Route path='/products' element={<Products/>} />
        <Route></Route>
      </Routes>
    </div>
  )
}

export default All_Routes
