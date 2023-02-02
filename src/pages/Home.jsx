import React from 'react'

import Information from '../components/Information'
import Members from '../components/Members'
import TataIbadah from '../components/TataIbadah'

function Home() {
  return (
    <div className='home'>
      <Information />
      <TataIbadah />
      <Members />
    </div>
  )
}

export default Home