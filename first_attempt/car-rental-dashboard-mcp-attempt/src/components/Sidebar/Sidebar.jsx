import React from 'react';

// Figma image assets
const img = "http://localhost:3845/assets/8550a3164172f3016c9adc465027b4db4f5bae4a.svg";
const img1 = "http://localhost:3845/assets/9ae644ed77cd8659653eec40a1de5c4bcc678cc0.svg";
const img2 = "http://localhost:3845/assets/1dc459c7b777c7ffcd34ec95daf565716173ff50.svg";
const img3 = "http://localhost:3845/assets/46911dc1f11bd74432c2ccc62aeb0fd88d1934df.svg";
const img4 = "http://localhost:3845/assets/fe5bbf35ee4e9923bd9ed98bd4fc1e805b1f3e11.svg";
const img5 = "http://localhost:3845/assets/af0d61d714454b846d24d927cb1da6818e9f424c.svg";
const img6 = "http://localhost:3845/assets/7d97363c42091315682ed1330d58a9a260925260.svg";
const img7 = "http://localhost:3845/assets/2f97df97ef58f2cad74eeaf1fc36245fa5463ca6.svg";
const img8 = "http://localhost:3845/assets/449d18d4ab694499ab1ddd723570c0d5fac56a57.svg";
const imgVector = "http://localhost:3845/assets/2dac093e0d008f694bfa0024b78169f3e451ff1e.svg";
const imgVector1 = "http://localhost:3845/assets/d9a362ef5433a8a265c0d18eb7733e9b602fdd00.svg";
const imgFrame = "http://localhost:3845/assets/f74222ed47a0b15340a3927221349bb5fa8cc9a8.svg";
const imgSplitLine = "http://localhost:3845/assets/877b56b9f2a002ec49225fdfb007fbc663d0d78c.svg";
const img9 = "http://localhost:3845/assets/a181b9cb2e5d930162a835307aa9f6c77b4a93f6.svg";
const img10 = "http://localhost:3845/assets/beda02d42a4405572d57ca139bd0dab1399380e0.svg";
const img11 = "http://localhost:3845/assets/9eede523e4e6ee2be847ea5362ad73c38c2074b5.svg";

// MenuCar component from Figma
function MenuCar() {
  return (
    <div className="relative size-full" style={{ width: '24px', height: '24px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '12.5% 8.33%' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
      </div>
      <div style={{ position: 'absolute', inset: '54.17% 66.67% 33.33% 20.83%' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
      </div>
      <div style={{ position: 'absolute', inset: '54.17% 20.83% 33.33% 66.67%' }}>
        <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector1} />
      </div>
    </div>
  );
}

// Menu component from Figma
function Menu({ type = "Dashboard", status = "Active" }) {
  if (type === "Bookings" && status === "Inactive") {
    return (
      <>
        <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', inset: '12.5%' }}>
            <div style={{ position: 'absolute', inset: '-5.556%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img} />
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
          Bookings
        </span>
      </>
    );
  }
  if (type === "Notifications" && status === "Inactive") {
    return (
      <>
        <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', inset: '8.33% 12.5% 29.17% 12.5%' }}>
            <div style={{ position: 'absolute', inset: '-6.67% -5.56%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img1} />
            </div>
          </div>
          <div style={{ position: 'absolute', inset: '87.5% 42.79% 8.35% 42.79%' }}>
            <div style={{ position: 'absolute', inset: '-100.37% -28.91% -100.36% -28.91%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img2} />
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
          Notifications
        </span>
      </>
    );
  }
  if (type === "Settings" && status === "Inactive") {
    return (
      <>
        <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', inset: '40.22%' }}>
            <div style={{ position: 'absolute', inset: '-21.308%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img3} />
            </div>
          </div>
          <div style={{ position: 'absolute', inset: '12.5%' }}>
            <div style={{ position: 'absolute', inset: '-5.556%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img4} />
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
          Settings
        </span>
      </>
    );
  }
  if (type === "Payment Details" && status === "Inactive") {
    return (
      <>
        <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', inset: '16.95% 7.94%' }}>
            <div style={{ position: 'absolute', inset: '-1.58% -1.24%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img5} />
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
          Payment Details
        </span>
      </>
    );
  }
  if (type === "Transactions" && status === "Inactive") {
    return (
      <>
        <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', inset: '9.316%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img6} />
          </div>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
          Transactions
        </span>
      </>
    );
  }
  if (type === "Car Report" && status === "Inactive") {
    return (
      <>
        <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', inset: '11.72% 19.38%' }}>
            <div style={{ position: 'absolute', inset: '-5.44% -6.8%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img7} />
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
          Car Report
        </span>
      </>
    );
  }
  // Default Dashboard active state
  return (
    <>
      <div style={{ overflow: 'hidden', position: 'relative', width: '24px', height: '24px' }}>
        <div style={{ position: 'absolute', inset: '58.33% 12.5% 12.5% 58.33%' }}>
          <div style={{ position: 'absolute', inset: '-14.286%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img8} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '58.33% 58.33% 12.5% 12.5%' }}>
          <div style={{ position: 'absolute', inset: '-14.286%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img8} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '12.5% 12.5% 58.33% 58.33%' }}>
          <div style={{ position: 'absolute', inset: '-14.286%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img8} />
          </div>
        </div>
        <div style={{ position: 'absolute', inset: '12.5% 58.33% 58.33% 12.5%' }}>
          <div style={{ position: 'absolute', inset: '-14.286%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img8} />
          </div>
        </div>
      </div>
      <span style={{ textTransform: 'capitalize', fontFamily: 'Inter, sans-serif', fontWeight: '500', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
        Dashboard
      </span>
    </>
  );
}

const Sidebar = () => {
  const navItems = [
    { type: 'Dashboard', label: 'Dashboard', active: true },
    { type: 'Drivers', label: 'Drivers' },
    { type: 'Bookings', label: 'Bookings' },
    { type: 'Notifications', label: 'Notifications' },
    { type: 'Settings', label: 'Settings' }
  ];

  const reportItems = [
    { type: 'Payment Details', label: 'Payment Details' },
    { type: 'Transactions', label: 'Transactions' },
    { type: 'Car Report', label: 'Car Report' }
  ];

  const logoStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    gap: '4px',
    padding: '24px 8px',
    marginBottom: '20px'
  };

  const logoIconStyle = {
    width: '40px',
    height: '30px',
    backgroundColor: '#006AFF',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '18px'
  };

  const logoTextStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '700',
    fontSize: '26px',
    lineHeight: '30px',
    color: '#ffffff',
    margin: 0
  };

  const menuItemStyle = (isActive = false) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    borderRadius: '8px',
    marginBottom: '8px',
    backgroundColor: isActive ? '#006AFF' : 'transparent',
    opacity: isActive ? 1 : 0.75,
    cursor: 'pointer',
    position: 'relative',
    transition: 'all 0.2s ease'
  });

  const menuIconStyle = {
    width: '24px',
    height: '24px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const menuTextStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#ffffff',
    margin: 0
  };

  const activeIndicatorStyle = {
    position: 'absolute',
    left: 0,
    top: '6px',
    width: '6px',
    height: '36px',
    backgroundColor: '#ffffff',
    borderRadius: '3px'
  };

  const reportHeaderStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '24px',
    color: 'rgba(255, 255, 255, 0.5)',
    margin: '32px 16px 16px 16px'
  };

  const separatorStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    margin: '16px 0'
  };

  const logoutButtonStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 46px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '8px',
    marginTop: 'auto',
    cursor: 'pointer',
    border: 'none',
    width: '100%'
  };

  const logoutTextStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    fontSize: '18px',
    lineHeight: '24px',
    color: '#ffffff',
    margin: 0
  };

  return (
    <div style={{ 
      width: '250px', 
      height: '100vh',
      backgroundColor: '#1A1919',
      color: 'white',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '114px'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Logo */}
        <div style={logoStyle}>
          <div style={{ height: '30px', width: '40px', position: 'relative' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgFrame} />
          </div>
          <h1 style={logoTextStyle}>CAR RENT</h1>
        </div>

        {/* Navigation */}
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          {/* Dashboard - Active */}
          <div style={{
            ...menuItemStyle(true),
            backgroundColor: '#006aff'
          }}>
            <div style={activeIndicatorStyle}></div>
            <Menu type="Dashboard" status="Active" />
          </div>
          
          {/* Drivers */}
          <div style={menuItemStyle(false)}>
            <MenuCar />
            <span style={{ textTransform: 'capitalize', fontFamily: 'Inter, sans-serif', fontWeight: '400', fontSize: '16px', lineHeight: '24px', color: '#ffffff' }}>
              Drivers
            </span>
          </div>
          
          {/* Other menu items */}
          <div style={menuItemStyle(false)}>
            <Menu type="Bookings" status="Inactive" />
          </div>
          <div style={menuItemStyle(false)}>
            <Menu type="Notifications" status="Inactive" />
          </div>
          <div style={menuItemStyle(false)}>
            <Menu type="Settings" status="Inactive" />
          </div>
        </nav>

        {/* Separator */}
        <div style={{ height: '16px', width: '192px', position: 'relative', margin: '16px 0' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgSplitLine} />
        </div>

        {/* Report Section */}
        <div>
          <div style={reportHeaderStyle}>Report</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={menuItemStyle(false)}>
              <Menu type="Payment Details" status="Inactive" />
            </div>
            <div style={menuItemStyle(false)}>
              <Menu type="Transactions" status="Inactive" />
            </div>
            <div style={menuItemStyle(false)}>
              <Menu type="Car Report" status="Inactive" />
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div style={{ padding: '32px 0' }}>
        <button style={logoutButtonStyle}>
          <div style={{ overflow: 'hidden', position: 'relative', width: '20px', height: '20px' }}>
            <div style={{ position: 'absolute', inset: '29.17% 37.5% 29.17% 41.67%' }}>
              <div style={{ position: 'absolute', inset: '-12% -24%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img9} />
              </div>
            </div>
            <div style={{ position: 'absolute', bottom: '50%', left: '12.5%', right: '37.5%', top: '50%' }}>
              <div style={{ position: 'absolute', inset: '-1px -10%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img10} />
              </div>
            </div>
            <div style={{ position: 'absolute', inset: '12.5% 12.5% 12.5% 62.5%' }}>
              <div style={{ position: 'absolute', inset: '-6.67% -20%' }}>
                <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={img11} />
              </div>
            </div>
          </div>
          <span style={logoutTextStyle}>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;