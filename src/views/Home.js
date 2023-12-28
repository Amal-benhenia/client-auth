import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from '../components/Navbarr'

function Home() {
  return (
    <div className='home'>
    <Navbarr/>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/512/1497/1497762.png" alt ="homepage" />
    </div>
    </div>
  )
}

export default Home
