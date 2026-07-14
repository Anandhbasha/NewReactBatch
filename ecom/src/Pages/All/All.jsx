import React, { useEffect, useState } from 'react'
import Card from '../../Components/Card/Card'

const All = () => {
  const [products,SetProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async()=>{
      try{
        const res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
          throw Error("Unable to Connect the API")
        }
        else{
          SetProducts(await res.json())
        }
      }catch(err){
        console.log(err);        
      }
    }
    fetchProducts()
  },[])
  console.log(products);
  
  return (
    <div className='All' style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {products.map((item)=>(
            <Card {...item} />
        ))}
    </div>
  )
}

export default All