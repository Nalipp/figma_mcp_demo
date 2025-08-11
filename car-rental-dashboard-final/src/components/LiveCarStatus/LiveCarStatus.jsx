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

  return (
    <div style={{ border: '1px solid #ddd', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
        <h5>Live Car Status</h5>
        <button style={{ padding: '5px 10px' }}>
          <i></i>
          Filter
        </button>
      </div>

      <div>
        <table>
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img 
                      src={row.avatar} 
                      alt={row.driver}
                      width="32"
                      height="32"
                    />
                    <span>{row.driver}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#999' }}></div>
                    <span>{row.status}</span>
                  </div>
                </td>
                <td>{row.earning}</td>
                <td>
                  <button style={{ padding: '5px 10px' }}>
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