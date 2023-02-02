import React from 'react'

import { Link } from 'react-router-dom'

function ProgramsPage() {
  return (
    <div className='programs-page'>
      <ul>
        <li><Link to='/programs/lagu-bahasa-inggris'><button>Lagu Ibadah Bahasa Inggris</button></Link></li>
        <li><Link to='/programs/tata-ibadah-3-feb-2023'><button>Tata Ibadah 3 February 2023</button></Link></li>
      </ul>
    </div>
  )
}

export default ProgramsPage