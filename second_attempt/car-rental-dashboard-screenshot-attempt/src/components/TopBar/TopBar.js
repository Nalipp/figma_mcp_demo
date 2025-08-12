import NotificationIcon from './NotificationIcon';
import SearchBar from './SearchBar';

function TopBar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '32px',
      padding: '28px 32px'
    }}>
      <NotificationIcon />
      <SearchBar />
    </div>
  );
}

export default TopBar;