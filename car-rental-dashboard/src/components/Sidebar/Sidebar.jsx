import React from 'react';

const Sidebar = () => {
  const navItems = [
    { icon: 'grid', label: 'Dashboard', active: true },
    { icon: 'person', label: 'Drivers' },
    { icon: 'calendar-check', label: 'Bookings' },
    { icon: 'bell', label: 'Notifications' },
    { icon: 'gear', label: 'Settings' }
  ];

  const reportItems = [
    { icon: 'credit-card', label: 'Payment Details' },
    { icon: 'arrow-left-right', label: 'Transactions' },
    { icon: 'car-front', label: 'Car Report' }
  ];

  return (
    <div style={{ 
      width: '250px', 
      minHeight: '100vh', 
      backgroundColor: '#2D3748',
      color: 'white',
      padding: '20px'
    }}>
      <div>
        {/* Logo */}
        <div>
          <div>
            <i></i>
          </div>
          <h5>CAR RENT</h5>
        </div>

        {/* Navigation */}
        <nav>
          {navItems.map((item, index) => (
            <div key={index}>
              <i></i>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Report Section */}
        <div>
          <h6>Report</h6>
          {reportItems.map((item, index) => (
            <div key={index}>
              <i></i>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sidebar;