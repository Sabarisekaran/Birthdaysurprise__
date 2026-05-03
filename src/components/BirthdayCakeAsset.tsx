import React from 'react';

const BirthdayCake: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cake base */}
      <rect x="50" y="100" width="100" height="60" rx="8" stroke="#D4A5A5" strokeWidth="2" fill="#F5E6E6" />
      
      {/* Plate */}
      <ellipse cx="100" cy="162" rx="60" ry="12" stroke="#D4A5A5" strokeWidth="1.5" fill="none" />
      
      {/* Icing drip */}
      <path d="M 55 100 Q 50 110 52 120" stroke="#FFB6D9" strokeWidth="3" fill="none" />
      <path d="M 75 100 Q 72 110 75 120" stroke="#FFB6D9" strokeWidth="3" fill="none" />
      <path d="M 100 100 Q 100 110 102 120" stroke="#FFB6D9" strokeWidth="3" fill="none" />
      <path d="M 125 100 Q 128 110 125 120" stroke="#FFB6D9" strokeWidth="3" fill="none" />
      <path d="M 145 100 Q 150 110 148 120" stroke="#FFB6D9" strokeWidth="3" fill="none" />
      
      {/* Candle stick */}
      <rect x="98" y="60" width="4" height="40" stroke="#D4A5A5" strokeWidth="1" fill="#FDD835" />
      
      {/* Candle flame */}
      <path d="M 100 55 Q 95 50 98 40 Q 100 50 102 40 Q 105 50 100 55" stroke="#FF6B6B" strokeWidth="1" fill="#FFF59D" />
      
      {/* Decorative dots on cake */}
      <circle cx="70" cy="130" r="3" fill="#FFB6D9" />
      <circle cx="100" cy="135" r="3" fill="#FFB6D9" />
      <circle cx="130" cy="130" r="3" fill="#FFB6D9" />
      
      {/* Cake layers line */}
      <path d="M 50 115 L 150 115" stroke="#D4A5A5" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
};

export default BirthdayCake;
