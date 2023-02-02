import React from 'react'
import Card from '../components/Card'
import '../styles/general.css'

import { memberData } from '../data'

function MembersPage() {
  const [query, setQuery] = React.useState('')

  return (
    <div className='members-page'>
      <input type="text" placeholder='Search...' className="search" onChange={e=>setQuery(e.target.value)}/>
      <div className='members-container'>
        {memberData.filter(data=>data.name.toLowerCase().includes(query)).map((data) => (
          <Card 
          key={data.key}
          profile={data.profile}
          name={data.name}
          sekbid={data.sekbid}
          />
        ))}
      </div>
    </div>
  )
}

export default MembersPage