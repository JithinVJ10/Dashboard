import React, { useState } from 'react'
import SideNav from '../Components/SideNav/SideNav'
import Header from '../Components/Header/Header'
import Home from '../Components/Home/Home'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
       <div className='grid-container'>
        <SideNav openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Header OpenSidebar={OpenSidebar}/>
        <Outlet/>
      </div>
    </>
  )
}

export default Dashboard
