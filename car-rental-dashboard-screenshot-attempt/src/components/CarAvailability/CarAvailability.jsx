import React from 'react';

const CarAvailability = () => {
  return (
    <div className="car-availability">
      <h2>Car Availability</h2>
      
      <div className="availability-form">
        {/* Car Number Dropdown */}
        <div className="form-group">
          <div className="input-wrapper">
            <span className="input-icon">🚗</span>
            <select className="form-select">
              <option>Car number</option>
              <option>6465</option>
              <option>5665</option>
              <option>1755</option>
            </select>
          </div>
        </div>

        {/* Date Picker */}
        <div className="form-group">
          <div className="input-wrapper">
            <span className="input-icon">📅</span>
            <input 
              type="date" 
              defaultValue="2022-11-20"
              className="form-input"
            />
          </div>
        </div>

        {/* Time Picker */}
        <div className="form-group">
          <div className="input-wrapper">
            <span className="input-icon">🕙</span>
            <select className="form-select">
              <option>10 AM</option>
              <option>11 AM</option>
              <option>12 PM</option>
              <option>1 PM</option>
              <option>2 PM</option>
            </select>
          </div>
        </div>

        {/* Check Button */}
        <div className="form-group">
          <button className="check-button">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarAvailability;