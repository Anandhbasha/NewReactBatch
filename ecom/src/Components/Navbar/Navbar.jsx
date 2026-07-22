import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { Passvalue } from '../../App'

const Navbar = () => {
  const {count} = useContext(Passvalue)
  return (
    <div className='Navbar'>
        <Link to="/">AllProducts</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <h2>Card {count}</h2>
    </div>
  )
}

export default Navbar