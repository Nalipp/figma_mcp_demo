import StatsSection from './StatsSection';
import CarAvailability from './CarAvailability';
import LiveCarStatus from '../LiveCarStatus/LiveCarStatus';

function MainContent() {
  return (
    <div style={{
      flex: 1,
      padding: '0 32px 32px 32px',
      display: 'flex',
      gap: '32px'
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px',
        flex: 1
      }}>
        <StatsSection />
      </div>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '32px',
        flex: 2
      }}>
        <CarAvailability />
        <LiveCarStatus />
      </div>
    </div>
  );
}

export default MainContent;