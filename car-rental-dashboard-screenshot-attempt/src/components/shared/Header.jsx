import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1>Car Availability</h1>
      </div>
      
      <div className="header-right">
        <div className="notification-badge">
          <div className="notification-icon">🔔</div>
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