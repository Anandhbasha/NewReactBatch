import React, { createContext, useEffect, useState } from 'react'
// npm i react-router-dom
// npm i axios
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'
import "./App.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import Login from './Pages/Login/Login'
import Sidebar from './Components/Sidebar/Sidebar'
export const Passvalue = createContext()
const App = () => {
  const [products,SetProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async()=>{
      try{
        const res = await axios.get("https://fakestoreapi.com/products")
        console.log(res.data);
        
        if(!res){
          throw Error("Unable to Connect the API")
        }
        else{
          SetProducts(await res.data)
        }
      }catch(err){
        console.log(err);        
      }
    }
    fetchProducts()
  },[])
  const [count,setCount] = useState(0)
  const {islogin} = useSelector(state=>state.auth)
  const sidebar = useSelector(state=>state.carts.sidebar)
  return (
    <BrowserRouter>
      
        {
          islogin?
          <Passvalue.Provider value={{products,count,setCount}}>
            <div className='App'>
              <Navbar/>
              {Sidebar && <Sidebar/>}
            </div>
            <Routes>
              <Route path='/' element={<All/>}/>
              <Route path='/mens' element={<Mens/>}/>
              <Route path='/womens' element={<Womens/>}/>
            </Routes>
          </Passvalue.Provider>
        :<Login/>}
      
    </BrowserRouter>
  )
}

export default App