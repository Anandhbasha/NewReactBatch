import React, { useReducer } from 'react'

export const App = () => {
  const reduce = (state,action)=>{
    switch(action.type){
      case "login":
        return {...state,login:state.login=="login"?"logout":"login"}
      case "count":
        return {...state,count:state.count+1}
      case "bg":
        return {...state,bg:state.bg=="dark"?"light":"dark"}
    }
  }
  const[state,dispatch] = useReducer(reduce,{count:0,login:"login",bg:"dark"})
  return (
    <div className='App'>
      <button onClick={()=>{dispatch({type:"login"})}}>{state.login}</button>
      <button onClick={()=>{dispatch({type:"count"})}}>{state.count}</button>
      <button onClick={()=>{dispatch({type:"bg"})}}>{state.bg}</button>
    </div>
  )
}
export default App