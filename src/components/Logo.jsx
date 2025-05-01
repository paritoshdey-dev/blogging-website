import React from 'react';
import logoImg from '../assets/logo.png'; // Update the path as per your project structure

function Logo({ width = '100px' }) {
  return (
    <div>
      <img
        src={logoImg}
        alt="Logo"
        style={{ width }}
        className="object-contain"
      />
    </div>
  );
}

export default Logo;