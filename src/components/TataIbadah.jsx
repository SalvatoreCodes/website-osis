import React from 'react'

import { Link } from 'react-router-dom'

function TataIbadah() {
  return (
    <div className='tata-ibadah'>
      <h1>Lagu Ibadah Bahasa Inggris</h1>
      <Link to='/programs/lagu-bahasa-inggris'><button>Click Here!</button></Link>
    </div>
  )
}

export default TataIbadah