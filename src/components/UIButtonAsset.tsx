import React from 'react';

interface UIButtonAssetProps {
  size?: number;
  label?: string;
}

const UIButtonAsset: React.FC<UIButtonAssetProps> = ({ size = 180, label = 'Tap to Enter' }) => {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 180 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Button shadow */}
      <rect
        x="10"
        y="35"
        width="160"
        height="50"
        rx="25"
        fill="black"
        opacity="0.1"
      />
      
      {/* Button fill */}
      <rect
        x="10"
        y="30"
        width="160"
        height="50"
        rx="25"
        stroke="#FFB6D9"
        strokeWidth="2"
        fill="#FFE0F0"
      />
      
      {/* Subtle pattern fill */}
      <defs>
        <pattern id="diagonal-stripes" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="8" y2="8" stroke="#FFB6D9" strokeWidth="0.5" opacity="0.2" />
        </pattern>
      </defs>
      <rect
        x="10"
        y="30"
        width="160"
        height="50"
        rx="25"
        fill="url(#diagonal-stripes)"
      />
      
      {/* Button text */}
      <text
        x="90"
        y="62"
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
        fontSize="16"
        fontWeight="600"
        textAnchor="middle"
        fill="#666666"
      >
        {label}
      </text>
      
      {/* Arrow icon */}
      <path
        d="M 140 58 L 150 58 M 145 53 L 150 58 L 145 63"
        stroke="#FFB6D9"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UIButtonAsset;
