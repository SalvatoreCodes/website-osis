import React from 'react'

import { Link } from 'react-router-dom'

function TataIbadah() {
  return (
    <div className='tata-ibadah'>
      <h1>Lagu Ibadah Bahasa Inggris</h1>
      <button><Link to='/programs/lagu-bahasa-inggris'>Click Here!</Link></button>
    </div>
  )
}

export default TataIbadah