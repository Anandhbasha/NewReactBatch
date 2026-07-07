import React from 'react'
import Button from './Button'

const App = () => {
  return (
    <div className='App'>
        <Button value = "Click" bg="red"/>
        <Button value = "Save"  bg="green" />
        <Button value = "Edit"  bg="black"/>
        <Button value = "Delete" bg="yello"/>
        <Button value = "Login"  bg="purple"/>
    </div>
  )
}

export default App