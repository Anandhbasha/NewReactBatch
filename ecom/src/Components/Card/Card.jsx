import React, { useContext } from 'react'
import "./Card.css"
import { Passvalue } from '../../App';
import { useDispatch } from 'react-redux';
import { addCart } from '../../Slices/CartSlice';

const Card = ({id,title,price,description,image}) => {
const {setCount} = useContext(Passvalue)
const dispatch = useDispatch()
    
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={image}></img>
        </div>
        <div className='cardBtm'>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <p>{description}</p>
        </div>+
        <div className='cardBtn'>
            <button onClick={()=>dispatch(addCart({id,title,price,description,image}))}>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default Card

// const person = {name:"abc",age:30}
// const {name,age} = person
// person.age