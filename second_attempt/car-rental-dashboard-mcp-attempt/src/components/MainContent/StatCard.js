function StatCard({ 
  title, 
  amount, 
  change, 
  changeType, 
  comparison, 
  lastWeekLabel, 
  lastWeekAmount 
}) {
  const changeSymbol = changeType === 'increase' ? '↑' : '↓';

  return (
    <div style={{
      padding: '24px'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingBottom: '12px',
        marginBottom: '12px'
      }}>
        <h3 style={{ 
          margin: 0
        }}>
          {title}
        </h3>
        <div style={{
          padding: '4px 8px'
        }}>
          <span>
            Today
          </span>
        </div>
      </div>

      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'end',
        marginBottom: '12px'
      }}>
        <h2 style={{ 
          margin: 0
        }}>
          $ {amount.toFixed(2)}
        </h2>
        <span>
          {changeSymbol} {Math.abs(change)}%
        </span>
      </div>

      <div>
        <p style={{ 
          margin: '0 0 2px 0'
        }}>
          {comparison}
        </p>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between'
        }}>
          <span>{lastWeekLabel}</span>
          <span>${lastWeekAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;