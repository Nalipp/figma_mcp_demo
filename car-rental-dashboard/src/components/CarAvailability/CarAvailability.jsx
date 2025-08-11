import React from 'react';

const CarAvailability = () => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px' }}>
      <h5>Car Availability</h5>
      
      <div style={{ display: 'flex', gap: '15px', alignItems: 'end' }}>
        {/* Car Number Dropdown */}
        <div>
          <div style={{ display: 'flex' }}>
            <span>
              <i></i>
            </span>
            <select>
              <option>Car number</option>
              <option>6465</option>
              <option>5665</option>
              <option>1755</option>
            </select>
          </div>
        </div>

        {/* Date Picker */}
        <div>
          <div style={{ display: 'flex' }}>
            <span>
              <i></i>
            </span>
            <input 
              type="date" 
              defaultValue="2022-11-20"
            />
          </div>
        </div>

        {/* Time Picker */}
        <div>
          <div style={{ display: 'flex' }}>
            <span>
              <i></i>
            </span>
            <select>
              <option>10 AM</option>
              <option>11 AM</option>
              <option>12 PM</option>
              <option>1 PM</option>
              <option>2 PM</option>
            </select>
          </div>
        </div>

        {/* Check Button */}
        <div>
          <button style={{ padding: '8px 16px' }}>
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarAvailability;