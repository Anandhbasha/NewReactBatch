import React from 'react'
// npm i react-router-dom
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import All from './Pages/All/All'
import Mens from './Pages/Mens/Mens'
const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
          <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<All/>}/>
        <Route path='/mens' element={<Mens/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App