import React, { createContext, useEffect, useState } from 'react'
// npm i react-router-dom
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import "./App.css"
export const Passvalue = createContext()
const App = () => {
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
  const [count,setCount] = useState(0)
  return (
    <BrowserRouter>
      <Passvalue.Provider value={{products,count,setCount}}>
        <div className='App'>
          <Navbar/>
        </div>
        <Routes>
          <Route path='/' element={<All/>}/>
          <Route path='/mens' element={<Mens/>}/>
          <Route path='/womens' element={<Womens/>}/>
        </Routes>
      </Passvalue.Provider>
    </BrowserRouter>
  )
}

export default App