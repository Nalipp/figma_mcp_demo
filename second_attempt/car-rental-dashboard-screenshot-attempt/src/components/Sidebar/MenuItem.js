function MenuItem({ label, isActive }) {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '12px',
      padding: '12px 16px',
      position: 'relative'
    }}>
      <div style={{ 
        width: '24px', 
        height: '24px'
      }}>
        {/* Icon placeholder */}
      </div>
      <span>
        {label}
      </span>
      {isActive && (
        <div style={{
          position: 'absolute',
          left: 0,
          top: '6px',
          width: '6px',
          height: '36px'
        }} />
      )}
    </div>
  );
}

export default MenuItem;