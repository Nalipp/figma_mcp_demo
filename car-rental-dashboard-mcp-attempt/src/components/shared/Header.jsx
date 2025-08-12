import React from 'react';

// Figma image assets
const imgClarityNotificationSolidBadged = "http://localhost:3845/assets/8686b7fd3511ad6fb1eb48788889a3a2fd2a51e7.svg";
const imgVector = "http://localhost:3845/assets/c78a7501aa9760f57b13f2b00821b731f6496ebe.svg";

// Notification Icon component from Figma
function NotificationIcon() {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        gap: '32px',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 0,
        position: 'relative',
        width: '24px',
        height: '24px'
      }}
    >
      <div
        style={{
          display: 'inline-grid',
          gridTemplateColumns: 'max-content',
          gridTemplateRows: 'max-content',
          lineHeight: 0,
          placeItems: 'start',
          position: 'relative',
          flexShrink: 0
        }}
      >
        <div
          style={{
            gridArea: '1 / 1',
            marginLeft: 0,
            marginTop: 0,
            position: 'relative',
            width: '24px',
            height: '24px'
          }}
        >
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgClarityNotificationSolidBadged} />
        </div>
      </div>
    </div>
  );
}

// Search Icon component from Figma
function SearchIcon() {
  return (
    <div style={{ position: 'relative', width: '24px', height: '24px' }}>
      <div style={{ position: 'absolute', inset: '8.33% 12.5% 12.5% 8.33%' }}>
        <div style={{ position: 'absolute', inset: '-4.74% -3.36% -3.35% -4.74%' }}>
          <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector} />
        </div>
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 0,
        position: 'relative',
        width: '100%',
        height: '60px',
        marginBottom: '16px'
      }}
    >
      {/* Left side - Empty space for title or other content */}
      <div style={{ flex: 1 }}>
        {/* This space can be used for page title, breadcrumbs, etc. */}
      </div>

      {/* Right side - Notification and Search */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '24px',
          alignItems: 'center',
          justifyContent: 'flex-end'
        }}
      >
        {/* Notification Icon */}
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            position: 'relative',
            flexShrink: 0
          }}
        >
          <NotificationIcon />
        </div>

        {/* Search Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: '20px',
            paddingRight: '16px',
            paddingTop: '12px',
            paddingBottom: '12px',
            position: 'relative',
            borderRadius: '12px',
            boxShadow: '0px 2.703px 27.031px 0px rgba(69,69,80,0.1)',
            flexShrink: 0,
            width: '300px'
          }}
        >
          <div
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: '400',
              lineHeight: 0,
              fontStyle: 'normal',
              position: 'relative',
              flexShrink: 0,
              fontSize: '16px',
              textAlign: 'left',
              color: '#A3A3A3',
              flex: 1
            }}
          >
            <p style={{ display: 'block', lineHeight: '24px', margin: 0 }}>Search here</p>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', flexShrink: 0, width: '24px', height: '24px' }}>
            <SearchIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;