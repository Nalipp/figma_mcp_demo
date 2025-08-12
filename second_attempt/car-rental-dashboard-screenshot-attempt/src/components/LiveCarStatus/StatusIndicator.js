function StatusIndicator({ status }) {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'completed':
        return {
          label: 'Completed'
        };
      case 'pending':
        return {
          label: 'Pending'
        };
      case 'in-route':
        return {
          label: 'In route'
        };
      default:
        return {
          label: 'Unknown'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      width: '118px'
    }}>
      <div style={{
        width: '16px',
        height: '16px'
      }} />
      <span>
        {config.label}
      </span>
    </div>
  );
}

export default StatusIndicator;