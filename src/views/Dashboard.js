import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbarr from '../components/Navbarr'
import { useSelector } from 'react-redux'

function Dashboard() {
const user = useSelector((state)=> state.auth.user)
 
  return (
    <div>
    <Navbarr/>
      <h2>Welcome {user?.userName} </h2>
      <img src='https://upload.wikimedia.org/wikipedia/commons/4/41/Profile-720.png' alt='pic' />
    </div>
  )
}

export default Dashboard
