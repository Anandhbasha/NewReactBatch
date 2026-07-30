import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../Slices/AuthSlice'

const Login = () => {
const[name,SetName] = useState("")
const navigate = useNavigate()
const dispatch = useDispatch()
const handleLogin = ()=>{
    if(name===""){
        alert("Enter the userName")
    }else{
        dispatch(login(name))
        navigate('/')
    }
}
  return (
    <div className='Login'>
        <h1>Login User</h1>
        <input type='text' value={name} onChange={(e)=>{SetName(e.target.value)}}></input>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login