function NotificationIcon() {
  return (
    <div style={{
      width: '24px',
      height: '24px',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        height: '100%'
      }}>
        {/* Bell icon placeholder */}
      </div>
      {/* Badge placeholder */}
      <div style={{
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        width: '8px',
        height: '8px'
      }} />
    </div>
  );
}

export default NotificationIcon;