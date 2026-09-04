import React, { useState } from 'react'
import App from './App'
import Landing from './pages/Landing'
import './main.css'

function Root() {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleGetStarted = () => {
    setCurrentPage('app')
  }

  const handleBackToHome = () => {
    setCurrentPage('landing')
  }

  return currentPage === 'landing' ? (
    <Landing onGetStarted={handleGetStarted} />
  ) : (
    <App onBack={handleBackToHome} />
  )
}

export default Root
