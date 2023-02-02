import React from 'react'

import { Link } from 'react-router-dom'

function Members() {
  return (
    <div className='members'>
      <div className='red-background'></div>
      <div className='members-content'>
        <h1>Our Members</h1>
        <button><Link to='/members'>Click Here!</Link></button>
      </div>
    </div>
  )
}

export default Members