import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, remove } from '../../Slices/CartSlice'
import "./Sidebar.css"

const Sidebar = () => {
  const cart = useSelector(state=>state.carts?.cart||[])
  const dispatch = useDispatch()
  const totalPrice = cart.reduce((sum,item)=>sum+item.price*item.qty,0)
  return (
    <div className='Sidebar'>
      <h3>Grand Total:{totalPrice}</h3>
      {cart.map((item)=>(
        <div key={item.id} className='cartItem'>        
          <img src={item.image}></img>
          <h3>{item.title}</h3>
          <h3>{item.price}</h3>
          <p>Qty:{item.qty}</p>
          <button onClick={()=>{dispatch(increaseQty({id:item.id}))}}>+</button>
          <button onClick={()=>{dispatch(decreaseQty({id:item.id}))}}>-</button>
          <button onClick={()=>{dispatch(remove(item.id))}}>Delete</button>
          
        </div>
      ))}
    </div>
  )
}

export default Sidebar