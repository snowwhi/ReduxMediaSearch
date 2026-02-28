import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    
      <ul className='bg-gray-700 text-white flex justify-center gap-10 items-center py-5 text-xl font-bold'>
        <li>
          <Link to='/'>Home </Link></li>
        <li>
          <Link to='/Collection'>Collection</Link>
         
        </li>
      </ul>
  )
}

export default Nav