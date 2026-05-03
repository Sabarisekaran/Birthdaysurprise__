import React from 'react';

const TeddyBear: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <circle cx="100" cy="130" r="50" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      
      {/* Head */}
      <circle cx="100" cy="70" r="40" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      
      {/* Ears */}
      <circle cx="75" cy="35" r="18" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      <circle cx="125" cy="35" r="18" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      
      {/* Bow on head */}
      <path d="M 100 35 L 95 20 L 100 25 L 105 20 Z" stroke="#FFB6D9" strokeWidth="1.5" fill="#FFB6D9" />
      <circle cx="98" cy="28" r="4" fill="#FFB6D9" />
      <circle cx="102" cy="28" r="4" fill="#FFB6D9" />
      
      {/* Eyes */}
      <circle cx="90" cy="65" r="4" fill="#333333" />
      <circle cx="110" cy="65" r="4" fill="#333333" />
      
      {/* Snout */}
      <ellipse cx="100" cy="80" rx="12" ry="10" stroke="#D4A5A5" strokeWidth="1.5" fill="#F5E6E6" />
      
      {/* Nose */}
      <circle cx="100" cy="78" r="3" fill="#333333" />
      
      {/* Mouth */}
      <path d="M 100 80 Q 95 85 92 83" stroke="#333333" strokeWidth="1.5" fill="none" />
      <path d="M 100 80 Q 105 85 108 83" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Arms */}
      <circle cx="70" cy="120" r="15" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      <circle cx="130" cy="120" r="15" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      
      {/* Feet */}
      <circle cx="85" cy="175" r="14" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      <circle cx="115" cy="175" r="14" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
    </svg>
  );
};

export default TeddyBear;
