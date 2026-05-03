import React from 'react';

const PandaAsset: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Party hat */}
      <path d="M 85 30 L 100 15 L 115 30 L 110 45 L 90 45 Z" stroke="#FFB6D9" strokeWidth="2" fill="#FFE0F0" />
      <circle cx="100" cy="20" r="4" fill="#FFB6D9" />
      <line x1="90" y1="45" x2="110" y2="45" stroke="#FFB6D9" strokeWidth="1.5" />
      
      {/* Head (white) */}
      <circle cx="100" cy="90" r="45" stroke="#333333" strokeWidth="2" fill="white" />
      
      {/* Left ear (black) */}
      <circle cx="70" cy="50" r="18" stroke="#333333" strokeWidth="2" fill="black" />
      
      {/* Right ear (black) */}
      <circle cx="130" cy="50" r="18" stroke="#333333" strokeWidth="2" fill="black" />
      
      {/* Left eye patch (black) */}
      <ellipse cx="80" cy="80" rx="15" ry="18" stroke="#333333" strokeWidth="1.5" fill="black" />
      
      {/* Right eye patch (black) */}
      <ellipse cx="120" cy="80" rx="15" ry="18" stroke="#333333" strokeWidth="1.5" fill="black" />
      
      {/* Left eye white */}
      <circle cx="80" cy="80" r="6" fill="white" />
      
      {/* Right eye white */}
      <circle cx="120" cy="80" r="6" fill="white" />
      
      {/* Left pupil */}
      <circle cx="80" cy="82" r="3" fill="black" />
      
      {/* Right pupil */}
      <circle cx="120" cy="82" r="3" fill="black" />
      
      {/* Nose */}
      <circle cx="100" cy="100" r="5" fill="black" />
      
      {/* Mouth */}
      <path d="M 100 100 Q 95 110 90 108" stroke="#333333" strokeWidth="1.5" fill="none" />
      <path d="M 100 100 Q 105 110 110 108" stroke="#333333" strokeWidth="1.5" fill="none" />
      
      {/* Pink cheek marks */}
      <circle cx="55" cy="95" r="4" fill="#FFB6D9" opacity="0.6" />
      <circle cx="145" cy="95" r="4" fill="#FFB6D9" opacity="0.6" />
      
      {/* Body (white) */}
      <ellipse cx="100" cy="160" rx="40" ry="35" stroke="#333333" strokeWidth="2" fill="white" />
      
      {/* Arms (black) */}
      <circle cx="65" cy="150" r="14" stroke="#333333" strokeWidth="2" fill="black" />
      <circle cx="135" cy="150" r="14" stroke="#333333" strokeWidth="2" fill="black" />
      
      {/* Feet (black) */}
      <circle cx="80" cy="190" r="12" stroke="#333333" strokeWidth="2" fill="black" />
      <circle cx="120" cy="190" r="12" stroke="#333333" strokeWidth="2" fill="black" />
    </svg>
  );
};

export default PandaAsset;
