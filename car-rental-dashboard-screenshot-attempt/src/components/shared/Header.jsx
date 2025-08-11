import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Car Availability</h1>
        <p className="subtitle">Tue, 14 Nov, 2022, 11.30 AM</p>
      </div>
      
      <div className="header-right">
        <div className="notification-badge">
          <div className="notification-icon">🔔</div>
          <div className="badge">1</div>
        </div>
        
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search here"
            className="search-input"
          />
          <button className="search-button">
            🔍
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;