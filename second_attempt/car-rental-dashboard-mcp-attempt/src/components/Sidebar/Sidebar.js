import Logo from './Logo';
import MenuSection from './MenuSection';
import LogoutButton from './LogoutButton';

function Sidebar() {
  const mainMenuItems = [
    { id: 'dashboard', label: 'Dashboard', isActive: true },
    { id: 'drivers', label: 'Drivers', isActive: false },
    { id: 'bookings', label: 'Bookings', isActive: false },
    { id: 'notifications', label: 'Notifications', isActive: false },
    { id: 'settings', label: 'Settings', isActive: false }
  ];

  const reportMenuItems = [
    { id: 'payment-details', label: 'Payment Details', isActive: false },
    { id: 'transactions', label: 'Transactions', isActive: false },
    { id: 'car-report', label: 'Car Report', isActive: false }
  ];

  return (
    <div style={{ 
      height: '100vh', 
      position: 'sticky', 
      top: 0,
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div>
        <Logo />
        <MenuSection title="Main Navigation" items={mainMenuItems} />
        <div style={{ height: '16px', margin: '16px 0' }}>
          {/* Split line placeholder */}
        </div>
        <MenuSection title="Report" items={reportMenuItems} />
      </div>
      <LogoutButton />
    </div>
  );
}

export default Sidebar;