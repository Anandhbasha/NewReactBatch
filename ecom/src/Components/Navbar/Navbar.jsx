import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <Link to="/">AllProducts</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
    </div>
  )
}

export default Navbar