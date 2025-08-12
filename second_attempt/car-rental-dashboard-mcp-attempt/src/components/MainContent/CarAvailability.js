function CarAvailability() {
  return (
    <div style={{
      padding: '32px 28px 40px 28px'
    }}>
      <div style={{ marginBottom: '16px' }}>
        <h3 style={{ 
          margin: 0
        }}>
          Car Availablity
        </h3>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '32px'
      }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          {/* Car Number Select */}
          <div style={{
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            minWidth: '160px'
          }}>
            <div style={{
              width: '24px',
              height: '24px'
            }}>
              {/* Car icon placeholder */}
            </div>
            <span>
              Car number
            </span>
            <div style={{
              width: '24px',
              height: '24px'
            }}>
              {/* Dropdown arrow placeholder */}
            </div>
          </div>

          {/* Date Time Picker */}
          <div style={{ display: 'flex' }}>
            <div style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '24px',
                height: '24px'
              }}>
                {/* Calendar icon placeholder */}
              </div>
              <span>
                Nov 20, 2022
              </span>
            </div>
            <div style={{
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '24px',
                height: '24px'
              }}>
                {/* Clock icon placeholder */}
              </div>
              <span>
                10 AM
              </span>
              <div style={{
                width: '24px',
                height: '24px'
              }}>
                {/* Dropdown arrow placeholder */}
              </div>
            </div>
          </div>
        </div>

        {/* Check Button */}
        <button style={{
          padding: '12px 36px'
        }}>
          Check
        </button>
      </div>
    </div>
  );
}

export default CarAvailability;