function Logo() {
  return (
    <div style={{ padding: '24px 8px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', alignItems: 'end', gap: '4px' }}>
        <div style={{ 
          width: '40px', 
          height: '30px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Logo icon placeholder */}
          <span>V</span>
        </div>
        <h1 style={{ 
          margin: 0
        }}>
          CAR RENT
        </h1>
      </div>
    </div>
  );
}

export default Logo;