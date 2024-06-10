import React, { useEffect, useState } from 'react';


const Alert = () => {
    const [showAlert, setShowAlert] = useState(true);
  
    const handleClose = () => {
      setShowAlert(false);
    };
  
    if (!showAlert) return null;
  
    return (
      <div className="alert-container backdrop-blur-2xl shadow-2xl">
        <div className="alert">
          <h2 className=' font-bold'>⚠️ Website Under Reconstruction ⚠️</h2>
          <p className='warning-details'>Thank you for visiting my portfolio! Please be aware that the site is currently undergoing reconstruction. Some pages might not be fully functional and certain content may be missing. I appreciate your patience and understanding as I work to improve the site. Please check back soon for updates!</p>
          <p className=' text-green-700 font-semibold'>You can still visit the site 🎉🥳 jsut hit the <span className='text-[#d32f2f]'>Close</span> button</p>
          <button className="close-button mt-3 bg-red-200 border-2 border-[#d32f2f] p-1 rounded-xl font-bold" onClick={handleClose}>Close</button>
        </div>
      </div>
    );
  };
  
  export default Alert;
