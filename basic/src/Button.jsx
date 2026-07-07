import React from 'react'

const Button = (props) => {
  return (
    <div className='btn'>
        <button style={{backgroundColor:props.bg}}>{props.value}</button>
    </div>
  )
}

export default Button