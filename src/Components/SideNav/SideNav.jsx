import React from 'react'
import { TbSettings2 } from 'react-icons/tb'
import { CgKeyhole } from 'react-icons/cg'
import { PiCubeFocusBold } from 'react-icons/pi'
import { LuUserSquare2 } from 'react-icons/lu'
import { TfiWallet } from 'react-icons/tfi'
import { BiMessageError, BiSolidOffer } from 'react-icons/bi'
import './SideNav.css'
import {Link} from 'react-router-dom'
import { HOME } from '../../Route/RoutesPaths'

const SideNav = ({openSidebarToggle, OpenSidebar}) => {
  return (
      <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <TbSettings2 className='icon_header'/> Dashboard
          </div>
          <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <Link to={HOME} className='no-text-decoration'>
              <CgKeyhole className='icon'/> Dashboard
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={HOME} className='no-text-decoration'>
              <PiCubeFocusBold className='icon'/> Products
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={HOME} className='no-text-decoration'>
              <LuUserSquare2 className='icon'/> Customers
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={HOME} className='no-text-decoration'>
              <TfiWallet className='icon'/> Income
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={HOME} className='no-text-decoration'>
              <BiSolidOffer className='icon'/> Promote
            </Link>
          </li>
          <li className='sidebar-list-item'>
            <Link to={HOME} className='no-text-decoration'>
              <BiMessageError className='icon'/> Help
            </Link>
          </li>
        </ul>
      </aside>
  )
}

export default SideNav
