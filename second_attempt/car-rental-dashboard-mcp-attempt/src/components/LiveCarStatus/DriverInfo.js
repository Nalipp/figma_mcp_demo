function DriverInfo({ driver }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '144px'
    }}>
      <img 
        src={driver.avatar} 
        alt={driver.name}
        style={{
          width: '24px',
          height: '24px'
        }}
      />
      <span>
        {driver.name}
      </span>
    </div>
  );
}

export default DriverInfo;