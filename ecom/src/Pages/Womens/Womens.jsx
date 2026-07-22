import { useContext, useEffect, useState } from "react"
import Card from "../../Components/Card/Card"
import { Passvalue } from "../../App"

const Womens = ()=> {
  const {products} = useContext(Passvalue)
    const womensProduct = products.filter((item)=>item.category==="women's clothing")
  return (
    <div className='Mens'>
      {womensProduct.map((item)=>(
        <Card {...item}/>
      )
        
      )}
    </div>
  )
}

export default Womens