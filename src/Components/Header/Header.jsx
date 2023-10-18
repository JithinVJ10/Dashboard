import React from 'react'
import 
 { BsJustify}
 from 'react-icons/bs'

import SearchBar from '../SearchBar'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left mt-3'>
        <p className='text-bold text-dark header-text head-title'>
            Hello Shahrukh👋,
        </p>

        </div>
        <div className='header-right'>
            <SearchBar/>

        </div>
    </header>
  )
}

export default Header
