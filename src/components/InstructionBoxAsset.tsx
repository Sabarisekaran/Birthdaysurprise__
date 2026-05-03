import React from 'react';

const InstructionBox: React.FC<{ size?: number }> = ({ size = 200 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Dashed border rectangle */}
      <rect
        x="15"
        y="15"
        width="170"
        height="130"
        rx="15"
        stroke="#FFB6D9"
        strokeWidth="2"
        strokeDasharray="8,4"
        fill="none"
      />
      
      {/* Light fill */}
      <rect
        x="15"
        y="15"
        width="170"
        height="130"
        rx="15"
        fill="#FFE0F0"
        opacity="0.3"
      />
      
      {/* Light bulb icon */}
      <circle cx="40" cy="60" r="12" stroke="#FFB6D9" strokeWidth="2" fill="white" />
      <path d="M 35 72 L 45 72 M 35 75 L 45 75" stroke="#FFB6D9" strokeWidth="2" />
      
      {/* Text area */}
      <text
        x="70"
        y="50"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="#666666"
      >
        Tap the button
      </text>
      <text
        x="70"
        y="70"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        fontSize="12"
        fontWeight="500"
        fill="#666666"
      >
        to reveal the
      </text>
      <text
        x="70"
        y="90"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        fontSize="12"
        fontWeight="bold"
        fill="#FFB6D9"
      >
        surprise!
      </text>
    </svg>
  );
};

export default InstructionBox;
