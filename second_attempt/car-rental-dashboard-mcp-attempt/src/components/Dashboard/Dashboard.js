import Sidebar from '../Sidebar/Sidebar';
import TopBar from '../TopBar/TopBar';
import MainContent from '../MainContent/MainContent';

function Dashboard() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', height: '100vh' }}>
      <Sidebar />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <TopBar />
        <MainContent />
      </div>
    </div>
  );
}

export default Dashboard;