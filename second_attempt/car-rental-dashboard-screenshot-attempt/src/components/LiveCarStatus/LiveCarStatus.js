import { carStatusData } from '../../data/seedData';
import CarStatusTable from './CarStatusTable';
import FilterButton from './FilterButton';

function LiveCarStatus() {
  return (
    <div style={{
      padding: '32px 28px 24px 28px'
    }}>
      <div style={{ marginBottom: '12px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '12px'
        }}>
          <h3 style={{ 
            margin: 0
          }}>
            Live Car Status
          </h3>
          <FilterButton />
        </div>
        
        {/* Table Header */}
        <div style={{
          display: 'flex',
          gap: '56px',
          alignItems: 'center',
          paddingBottom: '12px'
        }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            <div style={{ display: 'flex', gap: '36px' }}>
              <div style={{ width: '24px', textAlign: 'center' }}>No.</div>
              <div style={{ width: '66px' }}>Car no.</div>
            </div>
            <div style={{ width: '144px' }}>Driver</div>
          </div>
          <div style={{ width: '118px' }}>Status</div>
          <div style={{ width: '72px' }}>Earning</div>
        </div>
      </div>

      <CarStatusTable data={carStatusData} />
    </div>
  );
}

export default LiveCarStatus;