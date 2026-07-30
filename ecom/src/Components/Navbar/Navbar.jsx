import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import { Passvalue } from '../../App'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideBar } from '../../Slices/CartSlice'

const Navbar = () => {
  const {count} = useContext(Passvalue)
  const {username} = useSelector(state=>state.auth)
  const cart = useSelector(state=>state.carts?.cart||[])
  const {sidebar} = useSelector(state=>state.carts)
  const dispatch = useDispatch()
  return (
    <div className='Navbar'>
        <Link to="/">AllProducts</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
        <h2>{username}</h2>
        <button onClick={()=>dispatch(toggleSideBar())}>Card {cart.length}</button>
    </div>
  )
}

export default Navbar