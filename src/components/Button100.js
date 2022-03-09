import React from 'react'

const Button = ({color, text, onClick}) => {
  return (
    <button className='btn-block' style={{backgroundColor : color}} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button
