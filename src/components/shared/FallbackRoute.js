import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
  return (
    <div>
        <h3 className='text-center'>No Router Found</h3>
        <h4 className='text-center'><Link to="/">Go Back Home</Link></h4> 
    </div>
  )
}
