import React from 'react';

const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
      <div>
      </div>
      
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <i></i>
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