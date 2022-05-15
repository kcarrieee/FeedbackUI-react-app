import React from 'react'
import spinner from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='wrapper' >
    <img src={spinner} alt="spinner" className='spinner'/>
    </div>
  )
}

export default Spinner