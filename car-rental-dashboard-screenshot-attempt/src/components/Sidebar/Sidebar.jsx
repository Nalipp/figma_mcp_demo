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

  const getNavIcon = (iconType) => {
    const iconMap = {
      'grid': '⊞',
      'person': '👤',
      'calendar-check': '📅',
      'bell': '🔔',
      'gear': '⚙️',
      'credit-card': '💳',
      'arrow-left-right': '↔',
      'car-front': '🚗'
    };
    return iconMap[iconType] || '•';
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Logo */}
        <div className="sidebar-logo">
          <div className="logo-icon">
            ✓
          </div>
          <h5 className="logo-text">CAR RENT</h5>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {navItems.map((item, index) => (
            <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
              <div className="nav-icon">
                {getNavIcon(item.icon)}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Report Section */}
        <div className="sidebar-report">
          <h6 className="report-title">Report</h6>
          {reportItems.map((item, index) => (
            <div key={index} className="report-item">
              <div className="nav-icon">
                {getNavIcon(item.icon)}
              </div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="logout-section">
        <button className="logout-button">
          <div className="nav-icon">→</div>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;