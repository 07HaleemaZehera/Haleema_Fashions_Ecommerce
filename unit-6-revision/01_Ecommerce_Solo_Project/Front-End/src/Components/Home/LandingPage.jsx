import React from 'react'
import { Link } from 'react-router-dom'
import All_Routes from '../../Routes/All_Routes'
import Navbar from '../Navbar/Navbar'
import "./Landing.css"



export default function LandingPage() {
  return (
    <>
    <div>
        <All_Routes></All_Routes>
      <div className="container">
          <div className='navbar'>
             
              <Navbar/>
          </div>
          <div><Link to="/"><button >Start here</button></Link></div>
      </div>
    </div>
    </>
  )
}
