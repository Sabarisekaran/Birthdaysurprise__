import React from 'react';

const Decorations: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heart 1 */}
      <path
        d="M 30 50 Q 20 45 15 55 Q 15 65 30 75 Q 45 65 45 55 Q 40 45 30 50"
        stroke="#FFB6D9"
        strokeWidth="1.5"
        fill="#FFE0F0"
      />
      
      {/* Heart 2 */}
      <path
        d="M 170 80 Q 160 75 155 85 Q 155 95 170 105 Q 185 95 185 85 Q 180 75 170 80"
        stroke="#FFB6D9"
        strokeWidth="1.5"
        fill="#FFE0F0"
      />
      
      {/* Heart 3 */}
      <path
        d="M 60 160 Q 50 155 45 165 Q 45 175 60 185 Q 75 175 75 165 Q 70 155 60 160"
        stroke="#FFB6D9"
        strokeWidth="1.5"
        fill="#FFE0F0"
      />
      
      {/* Diamond 1 */}
      <path d="M 130 30 L 140 40 L 130 50 L 120 40 Z" stroke="#D4A5A5" strokeWidth="1" fill="none" />
      
      {/* Diamond 2 */}
      <path d="M 50 100 L 60 110 L 50 120 L 40 110 Z" stroke="#D4A5A5" strokeWidth="1" fill="none" />
      
      {/* Diamond 3 */}
      <path d="M 155 140 L 165 150 L 155 160 L 145 150 Z" stroke="#D4A5A5" strokeWidth="1" fill="none" />
      
      {/* Confetti circles */}
      <circle cx="80" cy="30" r="3" fill="#FFB6D9" opacity="0.7" />
      <circle cx="120" cy="100" r="2.5" fill="#D4A5A5" opacity="0.7" />
      <circle cx="40" cy="140" r="2.5" fill="#FFB6D9" opacity="0.7" />
      <circle cx="170" cy="50" r="2" fill="#D4A5A5" opacity="0.7" />
      <circle cx="30" cy="180" r="3" fill="#FFB6D9" opacity="0.7" />
      
      {/* Small dots */}
      <circle cx="100" cy="70" r="1.5" fill="#FFB6D9" opacity="0.6" />
      <circle cx="160" cy="110" r="1.5" fill="#D4A5A5" opacity="0.6" />
      <circle cx="50" cy="50" r="1.5" fill="#FFB6D9" opacity="0.6" />
    </svg>
  );
};

export default Decorations;
