import React from 'react';
import "./style.css";
const CallButton = () => {
  const handleCall = () => {
    window.location.href = 'tel:100';
  };

  return (
    <button onClick={handleCall} className = "callStyle">Call</button>
  );
};

export default CallButton;






