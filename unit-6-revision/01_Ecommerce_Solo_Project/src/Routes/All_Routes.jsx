import React from 'react'
import {Routes,Route} from "react-router-dom" 
import HomePage from '../Components/Home/HomePage'
import Mens from "../Components/Products/Mens"
import Not_Found from '../Components/Not_Found'
import Kids from '../Components/Products/Kids'
import Womens from '../Components/Products/Womens'
import Products from '../Components/Products/Products'
import AllProducts from '../Components/Products/AllProducts'


const All_Routes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/*" element={<Not_Found/>}></Route>
        <Route path="/product/men" element={<Mens/>}></Route>
        <Route path="/kids" element={<Kids/>}></Route>
        <Route path="/product/women" element={<Womens/>}></Route>
        <Route path='/products' element={<Products/>} />
        <Route path='all/products' element={<AllProducts/>} />
        <Route></Route>
      </Routes>
    </div>
  )
}

export default All_Routes
