import MenuItem from './MenuItem';

function MenuSection({ title, items }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      {title === 'Report' && (
        <div style={{ 
          padding: '12px 16px'
        }}>
          {title}
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {items.map(item => (
          <MenuItem 
            key={item.id} 
            label={item.label} 
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
}

export default MenuSection;