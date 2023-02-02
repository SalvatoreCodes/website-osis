import React from 'react'
import './styles/general.css'
import downArrow from './assets/down arrow.svg'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FooterComponent from './components/FooterComponent'

import Home from './pages/Home'

import { Routes, Route, Link } from 'react-router-dom'
import MembersPage from './pages/MembersPage'

function App() {
  const clickScrollHandler = () => {
    window.scrollBy(0, 1000)
  }

  return (
    <div className='app'>
      <div className='purple-background'></div>
      <a onClick={() => clickScrollHandler()}>
        <img src={downArrow} alt="down arrow" className='down-arrow'/>
      </a>
      <Navbar />
      <Hero />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/members' element={<MembersPage />}/>
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
