import React, { useContext, useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import { Passvalue } from '../../App'

const Mens = () => {
    const {products} = useContext(Passvalue)
    const mensProduct = products.filter((item)=>item.category==="men's clothing")
  return (
    <div className='Mens'>
      {mensProduct.map((item)=>(
        <Card {...item}/>
      )
        
      )}
    </div>
  )
}

export default Mens