function SearchBar() {
  return (
    <div style={{
      padding: '12px 24px 12px 32px',
      display: 'flex',
      alignItems: 'center',
      gap: '184px',
      minWidth: '320px'
    }}>
      <input 
        type="text" 
        placeholder="Search here"
        style={{
          border: 'none',
          outline: 'none',
          flex: 1
        }}
      />
      <div style={{
        width: '24px',
        height: '24px'
      }}>
        {/* Search icon placeholder */}
      </div>
    </div>
  );
}

export default SearchBar;