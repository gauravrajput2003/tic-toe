import React from 'react'

const Square = (props) => {
  return (
    <div className='w-full h-20 border border-black flex items-center justify-center' onClick={props.onClick}>
        <h5 className='font-bold'>{props.value}</h5>
    </div>
  )
}


export default Square;