import React from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchBar = () => {
  return (
    <div className='d-flex align-items-center'>
    <div className='position-relative'>
        <FaSearch className='position-absolute top-50 start-0 translate-middle-y ps-2  icon-large' />
        <input type="search" placeholder='Search' className='search-bar p-2 ps-5' />
    </div>
    </div>
  )
}

export default SearchBar
