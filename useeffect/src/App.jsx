import React, { useEffect, useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  useEffect(()=>{
      function show(){
        console.log("Hello Welcome"); 
      }   
      show() 
       function removes(){
        console.log("Hello Welcome to useEffect"); 
      }   
      removes() 
  },[count])
  return (
    <div className='App'>
      <button onClick={()=>setCount(++count)}>Add</button>
    </div>
  )
}

export default App