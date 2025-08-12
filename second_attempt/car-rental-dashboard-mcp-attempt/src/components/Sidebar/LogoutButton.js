function LogoutButton() {
  return (
    <div style={{ padding: '32px 0' }}>
      <div style={{
        padding: '12px 46px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px'
      }}>
        <div style={{
          width: '20px',
          height: '20px'
        }}>
          {/* Logout icon placeholder */}
        </div>
        <span>
          Logout
        </span>
      </div>
    </div>
  );
}

export default LogoutButton;