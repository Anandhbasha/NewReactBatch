// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount] = useState(0)

//    const square = useMemo(()=>{
//     console.log("Calculating...");
//     return count*count;    
//   },[count])

//   return (
//     <div className='App'>
//       <h2>{square}</h2>
//       <button onClick={()=>setCount((prev)=>++prev)}>Increment</button>
//     </div>
//   )
// }

// export default App


import React, { useRef, useState } from 'react'

const App = () => {
 const inputRef = useRef(null)

 const focusInput = ()=>{
  inputRef.current.focus()
  console.log(inputRef.current.value);
  
 }
  
 const clearInput = ()=>{
  inputRef.current.value ="";
 }
  return (
    <div className='App'>
      <input type='text' ref={inputRef}></input>
      <button onClick={focusInput}>Focus</button>
      <button onClick={clearInput}>Clear</button>
    </div>
  )
}

export default App