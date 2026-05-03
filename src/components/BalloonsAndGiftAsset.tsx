import React from 'react';

const BalloonsAndGift: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left balloon */}
      <ellipse cx="50" cy="50" rx="20" ry="28" stroke="#FFB6D9" strokeWidth="2" fill="#FFE0F0" />
      <line x1="50" y1="78" x2="50" y2="120" stroke="#D4A5A5" strokeWidth="1.5" />
      
      {/* Middle balloon */}
      <ellipse cx="100" cy="40" rx="20" ry="28" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      <line x1="100" y1="68" x2="100" y2="120" stroke="#D4A5A5" strokeWidth="1.5" />
      
      {/* Right balloon */}
      <ellipse cx="150" cy="55" rx="20" ry="28" stroke="#FFB6D9" strokeWidth="2" fill="#FFE0F0" />
      <line x1="150" y1="83" x2="150" y2="120" stroke="#D4A5A5" strokeWidth="1.5" />
      
      {/* Gift box */}
      <rect x="85" y="130" width="30" height="30" rx="3" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      
      {/* Gift ribbon horizontal */}
      <line x1="85" y1="145" x2="115" y2="145" stroke="#FFB6D9" strokeWidth="2" />
      
      {/* Gift ribbon vertical */}
      <line x1="100" y1="130" x2="100" y2="160" stroke="#FFB6D9" strokeWidth="2" />
      
      {/* Gift bow */}
      <circle cx="95" cy="135" r="4" fill="#FFB6D9" />
      <circle cx="105" cy="135" r="4" fill="#FFB6D9" />
      <circle cx="100" cy="140" r="3" fill="#FFB6D9" />
      
      {/* Decorative details */}
      <circle cx="95" cy="150" r="2" fill="#FFB6D9" />
      <circle cx="105" cy="150" r="2" fill="#FFB6D9" />
    </svg>
  );
};

export default BalloonsAndGift;
