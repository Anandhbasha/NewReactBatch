import React, { useContext, useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'
import { Passvalue } from '../../App'

const All = () => {
  const {products} = useContext(Passvalue)  
  return (
    <div className='All' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {products.map((item)=>(
            <Card {...item} />
        ))}
    </div>
  )
}

export default All