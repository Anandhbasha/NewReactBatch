import React, { useState } from 'react'

const App = () => {
  let [count,setCount] = useState(0)
  let [bg,setBg] = useState("light")
  // count,
  const counts = ()=>{
    setCount(++count)
    console.log(count);    
  }
  const bgchange = ()=>{
    setBg(bg==="dark"?"light":"dark")
  }
  return (
    <div className='App' style={{height:"100vh",width:"100vw",backgroundColor:bg==="dark"?"black":"white"}}>
      <p>{count}</p>
      <button onClick={counts}>Add</button>
      <button onClick={bgchange}>{bg}</button>
      <select>
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>30</option>
        <option>50</option>
      </select>
    </div>
  )
}

export default App