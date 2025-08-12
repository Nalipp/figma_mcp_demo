import StatCard from './StatCard';

function StatsSection() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h2 style={{ 
          margin: '0 0 8px 0'
        }}>
          Todays Statistics
        </h2>
        <p style={{ 
          margin: 0
        }}>
          Tue, 14 Nov, 2022, 11.30 AM
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <StatCard 
          title="Income"
          amount={9460.00}
          change={-1.5}
          changeType="decrease"
          comparison="Compared to $9940 yesterday"
          lastWeekLabel="Last week Income"
          lastWeekAmount={25658.00}
        />
        
        <StatCard 
          title="Expences"
          amount={5660.00}
          change={2.5}
          changeType="increase"
          comparison="Compared to $5240 yesterday"
          lastWeekLabel="Last week expences"
          lastWeekAmount={22658.00}
        />
      </div>
    </div>
  );
}

export default StatsSection;