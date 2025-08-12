import DriverInfo from './DriverInfo';
import StatusIndicator from './StatusIndicator';

function CarStatusRow({ car, rowNumber }) {
  return (
    <div style={{
      display: 'flex',
      gap: '48px',
      alignItems: 'center',
      padding: '12px 0'
    }}>
      <div style={{ display: 'flex', gap: '56px', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            <div style={{ 
              width: '24px', 
              textAlign: 'center'
            }}>
              {rowNumber.toString().padStart(2, '0')}
            </div>
            <div style={{
              padding: '4px 12px',
              width: '66px',
              textAlign: 'center'
            }}>
              <span>
                {car.carNumber}
              </span>
            </div>
          </div>
          <DriverInfo driver={car.driver} />
        </div>
        <StatusIndicator status={car.status} />
      </div>
      
      <div style={{ 
        width: '72px'
      }}>
        $ {car.earning.toFixed(2)}
      </div>
      
      <button style={{
        padding: '4px 16px'
      }}>
        Details
      </button>
    </div>
  );
}

export default CarStatusRow;