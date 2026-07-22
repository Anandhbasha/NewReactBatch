import React, { useContext } from 'react'
import "./Card.css"
import { Passvalue } from '../../App';

const Card = ({title,price,description,image}) => {
    console.log(title);
const {setCount} = useContext(Passvalue)
    
  return (
    <div className='Card'>
        <div className='cardTop'>
            <img src={image}></img>
        </div>
        <div className='cardBtm'>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <p>{description}</p>
        </div>
        <div className='cardBtn'>
            <button onClick={()=>setCount((prev)=>++prev)}>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default Card

// const person = {name:"abc",age:30}
// const {name,age} = person
// person.age