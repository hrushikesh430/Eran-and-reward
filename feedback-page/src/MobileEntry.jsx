// import React, { useState } from 'react';

// function MobileEntry({ onClose, onSave }) {
//   const [mobile, setMobile] = useState({
//     mobileName: '',
//     releaseDate: '',
//     price: '',
//     modelNumber: '',
//     specification: '',
//   });

//   const handleChange = event => {
//     const { name, value } = event.target;
//     setMobile({ ...mobile, [name]: value });
//   };

//   const handleSave = () => {
//     onSave(mobile);
//     onClose();
//   };

//   return (
//     <div>
//       <h2>Add Mobile</h2>
//       <label>Mobile Name:</label>
//       <input type="text" name="mobileName" onChange={handleChange} />

//       {/* Add other input fields for release date, price, model number, and specification here */}

//       <button onClick={handleSave}>Save</button>
//       <button onClick={onClose}>Cancel</button>
//     </div>
//   );
// }

// export default MobileEntry;