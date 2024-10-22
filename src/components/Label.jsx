import React from 'react'
import './styles/Label.css'

function Label({tag}) {
  return (
    <div className='card-tag'>
        <span></span>
        <div>{tag}</div>
    </div>
  )
}

export default Label