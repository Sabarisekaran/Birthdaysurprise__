import React from 'react';

const BannerFlags: React.FC<{ size?: number }> = ({ size = 240 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* String */}
      <line x1="10" y1="30" x2="230" y2="30" stroke="#D4A5A5" strokeWidth="1.5" />
      
      {/* Flag 1 */}
      <path d="M 30 30 L 30 50 L 45 40 Z" stroke="#FFB6D9" strokeWidth="1.5" fill="#FFE0F0" />
      <line x1="32" y1="35" x2="40" y2="45" stroke="#FFB6D9" strokeWidth="1" opacity="0.5" />
      
      {/* Flag 2 */}
      <path d="M 60 30 L 60 50 L 75 40 Z" stroke="#D4A5A5" strokeWidth="1.5" fill="#F5E6E6" />
      
      {/* Flag 3 */}
      <path d="M 90 30 L 90 50 L 105 40 Z" stroke="#FFB6D9" strokeWidth="1.5" fill="#FFE0F0" />
      <line x1="92" y1="35" x2="100" y2="45" stroke="#FFB6D9" strokeWidth="1" opacity="0.5" />
      
      {/* Flag 4 */}
      <path d="M 120 30 L 120 50 L 135 40 Z" stroke="#D4A5A5" strokeWidth="1.5" fill="#F5E6E6" />
      
      {/* Flag 5 */}
      <path d="M 150 30 L 150 50 L 165 40 Z" stroke="#FFB6D9" strokeWidth="1.5" fill="#FFE0F0" />
      <line x1="152" y1="35" x2="160" y2="45" stroke="#FFB6D9" strokeWidth="1" opacity="0.5" />
      
      {/* Flag 6 */}
      <path d="M 180 30 L 180 50 L 195 40 Z" stroke="#D4A5A5" strokeWidth="1.5" fill="#F5E6E6" />
      
      {/* Flag 7 */}
      <path d="M 210 30 L 210 50 L 225 40 Z" stroke="#FFB6D9" strokeWidth="1.5" fill="#FFE0F0" />
    </svg>
  );
};

export default BannerFlags;
