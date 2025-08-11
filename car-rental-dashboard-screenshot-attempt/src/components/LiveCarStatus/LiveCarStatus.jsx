import React from 'react';

const LiveCarStatus = () => {
  const statusData = [
    {
      id: '01',
      carNo: '6465',
      driver: 'Alex Noman',
      avatar: 'https://i.pravatar.cc/40?img=1',
      status: 'Completed',
      earning: '$ 35.44',
      statusColor: 'success'
    },
    {
      id: '02',
      carNo: '5665',
      driver: 'Razib Rahman',
      avatar: 'https://i.pravatar.cc/40?img=2',
      status: 'Pending',
      earning: '$ 0.00',
      statusColor: 'primary'
    },
    {
      id: '03',
      carNo: '1755',
      driver: 'Luke Norton',
      avatar: 'https://i.pravatar.cc/40?img=3',
      status: 'In route',
      earning: '$ 23.50',
      statusColor: 'danger'
    }
  ];

  const getStatusClass = (statusColor) => {
    const statusMap = {
      'success': 'completed',
      'primary': 'pending',
      'danger': 'in-route'
    };
    return statusMap[statusColor] || 'pending';
  };

  return (
    <div className="live-car-status">
      <div className="status-header">
        <h2>Live Car Status</h2>
        <button className="filter-button">
          <span>📊</span>
          Filter
        </button>
      </div>

      <div>
        <table className="status-table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Car no.</th>
              <th>Driver</th>
              <th>Status</th>
              <th>Earning</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {statusData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.carNo}</td>
                <td>
                  <div className="driver-cell">
                    <img 
                      src={row.avatar} 
                      alt={row.driver}
                      className="driver-avatar"
                    />
                    <span>{row.driver}</span>
                  </div>
                </td>
                <td>
                  <div className="status-cell">
                    <div className={`status-dot ${getStatusClass(row.statusColor)}`}></div>
                    <span>{row.status}</span>
                  </div>
                </td>
                <td>{row.earning}</td>
                <td>
                  <button className="details-button">
                    Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveCarStatus;