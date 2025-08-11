import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/shared/Header'
import CarAvailability from './components/CarAvailability/CarAvailability'
import LiveCarStatus from './components/LiveCarStatus/LiveCarStatus'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
        <Header />
        <CarAvailability />
        <LiveCarStatus />
      </div>
    </div>
  )
}

export default App
