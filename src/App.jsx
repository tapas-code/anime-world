import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Navbar />
      <Hero />
      <Main />
    </div>
  )
}

export default App
