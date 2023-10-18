import React, { useState } from 'react';
import './MobileFeedbackForm.css'; // Import your CSS file

function MobileFeedbackForm() {
  const [mobileData, setMobileData] = useState({
    mobileName: '',
    releaseDate: '',
    price: '',
    modelNumber: '',
  });

  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMobileData({ ...mobileData, [name]: value });
  };

  const handleCheckboxChange = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send the data to a server or perform other actions
    console.log('Form data submitted:', {
      ...mobileData,
      selectedItems: selectedItems,
    });
  };

  return (
    <div className="mobile-feedback-form">
      <h2>Mobile Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="mobileName">Mobile Name:</label>
          <input
            type="text"
            id="mobileName"
            name="mobileName"
            value={mobileData.mobileName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={mobileData.releaseDate}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={mobileData.price}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="modelNumber">Model Number:</label>
          <input
            type="text"
            id="modelNumber"
            name="modelNumber"
            value={mobileData.modelNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-group horizontal-checkboxes">
          <label>Features:</label>
          <div>
            <label className="horizontal-label">
              <input
                type="checkbox"
                name="features"
                value="Camera"
                checked={selectedItems.includes('Camera')}
                onChange={() => handleCheckboxChange('Camera')}
              />
              Camera
            </label>
            <label className="horizontal-label">
              <input
                type="checkbox"
                name="features"
                value="Battery"
                checked={selectedItems.includes('Battery')}
                onChange={() => handleCheckboxChange('Battery')}
              />
              Battery
            </label>
            <label className="horizontal-label">
              <input
                type="checkbox"
                name="features"
                value="Display"
                checked={selectedItems.includes('Display')}
                onChange={() => handleCheckboxChange('Display')}
              />
              Display
            </label>
            <label className="horizontal-label">
              <input
                type="checkbox"
                name="features"
                value="Port"
                checked={selectedItems.includes('Port')}
                onChange={() => handleCheckboxChange('Port')}
              />
              Port
            </label>
            <label className="horizontal-label">
              <input
                type="checkbox"
                name="features"
                value="RAM"
                checked={selectedItems.includes('RAM')}
                onChange={() => handleCheckboxChange('RAM')}
              />
              RAM
            </label>
          </div>
        </div>

        <div className="selected-items">
          <p>Selected Features:</p>
          <ul>
            {selectedItems.map((item) => (
              <li key={item}>
                {item}{' '}
                <span
                  className="remove-item"
                  onClick={() => handleCheckboxChange(item)}
                >
                  ✕
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MobileFeedbackForm;
