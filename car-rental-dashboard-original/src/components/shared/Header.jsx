import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div>
        <h4>Todays Statistics</h4>
        <small>Tue, 14 Nov, 2022, 11.30 AM</small>
      </div>
      
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i></i>
          <span>1</span>
        </div>
        
        <div style={{ display: 'flex', gap: '5px' }}>
          <input 
            type="text" 
            placeholder="Search here"
          />
          <button>
            <i></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;