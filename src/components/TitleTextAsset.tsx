import React from 'react';

const TitleText: React.FC<{ size?: number }> = ({ size = 280 }) => {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 280 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* First line - "Shhh..." */}
      <text
        x="140"
        y="30"
        fontFamily="'Comic Sans MS', 'Segoe UI', cursive"
        fontSize="20"
        fontWeight="400"
        textAnchor="middle"
        fill="#666666"
      >
        Shhh...
      </text>
      
      {/* Second line - "It's a" */}
      <text
        x="140"
        y="60"
        fontFamily="'Comic Sans MS', 'Segoe UI', cursive"
        fontSize="18"
        fontWeight="400"
        textAnchor="middle"
        fill="#666666"
      >
        It&apos;s a
      </text>
      
      {/* Highlight background for "Birthday" */}
      <rect
        x="50"
        y="70"
        width="180"
        height="35"
        rx="8"
        fill="#FFE0F0"
        opacity="0.5"
      />
      
      {/* Third line - "Birthday" in pink */}
      <text
        x="140"
        y="100"
        fontFamily="'Comic Sans MS', 'Segoe UI', cursive"
        fontSize="32"
        fontWeight="bold"
        textAnchor="middle"
        fill="#FFB6D9"
      >
        Birthday
      </text>
      
      {/* Fourth line - "Surprise!" */}
      <text
        x="140"
        y="130"
        fontFamily="'Comic Sans MS', 'Segoe UI', cursive"
        fontSize="28"
        fontWeight="bold"
        textAnchor="middle"
        fill="#666666"
      >
        Surprise!
      </text>
      
      {/* Decorative underline */}
      <path
        d="M 40 138 Q 140 145 240 138"
        stroke="#FFB6D9"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default TitleText;
