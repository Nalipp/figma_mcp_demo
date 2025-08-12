import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/shared/Header'
import CarAvailability from './components/CarAvailability/CarAvailability'
import LiveCarStatus from './components/LiveCarStatus/LiveCarStatus'
import './App.css'

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Fixed Sidebar */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        height: '100vh', 
        zIndex: 1000,
        overflowY: 'auto'
      }}>
        <Sidebar />
      </div>
      
      {/* Main Content Area */}
      <div style={{ 
        marginLeft: '250px', 
        flex: 1, 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        {/* Header - Fixed height */}
        <div style={{ 
          flexShrink: 0,
          padding: '20px 20px 0 20px'
        }}>
          <Header />
        </div>
        
        {/* Content Area with controlled heights */}
        <div style={{ 
          flex: 1,
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          overflow: 'hidden',
          minHeight: 0,
          backgroundColor: '#FAFAFA'
        }}>
          {/* Car Availability - Fixed height */}
          <div style={{ 
            height: '180px',
            flexShrink: 0
          }}>
            <CarAvailability />
          </div>
          
          {/* Live Car Status - Takes remaining space */}
          <div style={{ 
            flex: 1,
            minHeight: 0,
            overflow: 'hidden'
          }}>
            <LiveCarStatus />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
