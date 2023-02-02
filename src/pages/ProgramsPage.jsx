import React from 'react'

import { Link } from 'react-router-dom'

function ProgramsPage() {
  return (
    <div className='programs-page'>
      <ul>
        <li><Link to='/programs/lagu-bahasa-inggris'><button>Lagu Ibadah Bahasa Inggris</button></Link></li>
      </ul>
    </div>
  )
}

export default ProgramsPage