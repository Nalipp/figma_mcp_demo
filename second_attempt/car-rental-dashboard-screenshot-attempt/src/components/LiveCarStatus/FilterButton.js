function FilterButton() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0 16px'
    }}>
      <div style={{
        width: '16px',
        height: '16px'
      }}>
        {/* Filter icon placeholder */}
      </div>
      <span>
        Filter
      </span>
    </div>
  );
}

export default FilterButton;