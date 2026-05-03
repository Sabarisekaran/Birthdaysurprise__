import React from 'react';

interface TeddyProps {
  colored?: boolean;
  color?: string;
  onHover?: () => void;
  brushActive?: boolean;
  expression?: 'default' | 'wave' | 'happy' | 'surprised' | 'thank-you' | 'shy';
}

const Teddy: React.FC<TeddyProps> = ({ 
  colored = false, 
  color = '#FFB6C1', 
  onHover = () => {},
  expression = 'default'
}) => {
  const bodyFill = colored ? color : '#FFFFFF';
  const bodyStroke = '#2C2C2C';
  
  return (
    <svg
      className="teddy-svg"
      viewBox="0 0 100 140"
      width="90"
      height="130"
      onMouseEnter={onHover}
      onTouchStart={onHover}
      style={{ cursor: 'pointer' }}
    >
      {/* Body */}
      <ellipse 
        cx="50" 
        cy="85" 
        rx="32" 
        ry="35" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="2" 
        opacity="1"
      />

      {/* Head */}
      <circle 
        cx="50" 
        cy="45" 
        r="26" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="2" 
        opacity="1"
      />

      {/* Ears */}
      <circle 
        cx="28" 
        cy="20" 
        r="12" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="2" 
        opacity="1"
      />
      <circle 
        cx="72" 
        cy="20" 
        r="12" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="2" 
        opacity="1"
      />

      {/* Bow on head */}
      <path
        d="M 35 12 Q 40 8 45 12 L 45 16 Q 40 12 35 16 Z"
        fill="#FFB6C1"
        stroke="#8B4789"
        strokeWidth="1"
        opacity="0.8"
      />
      <path
        d="M 55 12 Q 60 8 65 12 L 65 16 Q 60 12 55 16 Z"
        fill="#FFB6C1"
        stroke="#8B4789"
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Eyes - NEVER colored, always outline only */}
      <circle cx="40" cy="40" r="3" fill="none" stroke="#2C2C2C" strokeWidth="1.5" />
      <circle cx="60" cy="40" r="3" fill="none" stroke="#2C2C2C" strokeWidth="1.5" />
      
      {/* Eye shine */}
      <circle cx="41" cy="39" r="1" fill="#2C2C2C" opacity="0.6" />
      <circle cx="61" cy="39" r="1" fill="#2C2C2C" opacity="0.6" />

      {/* Nose - NEVER colored */}
      <circle cx="50" cy="50" r="2" fill="none" stroke="#2C2C2C" strokeWidth="1.5" />

      {/* Mouth - NEVER colored, varies by expression */}
      {expression === 'happy' && (
        <path
          d="M 45 55 Q 50 58 55 55"
          fill="none"
          stroke="#2C2C2C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
      {expression === 'surprised' && (
        <circle cx="50" cy="56" r="2.5" fill="none" stroke="#2C2C2C" strokeWidth="1.5" />
      )}
      {expression === 'shy' && (
        <line x1="45" y1="56" x2="55" y2="56" stroke="#2C2C2C" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      )}
      {expression === 'thank-you' && (
        <path
          d="M 48 53 Q 50 56 52 53"
          fill="none"
          stroke="#2C2C2C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
      {(expression === 'default' || expression === 'wave') && (
        <path
          d="M 46 55 Q 50 56 54 55"
          fill="none"
          stroke="#2C2C2C"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}

      {/* Arms */}
      <ellipse 
        cx="22" 
        cy="80" 
        rx="12" 
        ry="18" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="2" 
        opacity="1"
      />
      <ellipse 
        cx="78" 
        cy="80" 
        rx="12" 
        ry="18" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="2" 
        opacity="1"
      />

      {/* Wave arm gesture */}
      {expression === 'wave' && (
        <>
          <path
            d="M 75 65 Q 85 55 90 50"
            fill="none"
            stroke={bodyStroke}
            strokeWidth="2"
            opacity="1"
            strokeLinecap="round"
          />
          <path
            d="M 88 48 L 92 45 L 90 52"
            fill={bodyStroke}
            opacity="1"
          />
        </>
      )}

      {/* Feet/Legs */}
      <ellipse 
        cx="35" 
        cy="118" 
        rx="10" 
        ry="12" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="1.5" 
        opacity="1"
      />
      <ellipse 
        cx="65" 
        cy="118" 
        rx="10" 
        ry="12" 
        fill={bodyFill} 
        stroke={bodyStroke} 
        strokeWidth="1.5" 
        opacity="1"
      />

      {/* Shading strokes for depth */}
      {!colored && (
        <>
          <line x1="50" y1="75" x2="52" y2="80" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.3" />
          <line x1="40" y1="95" x2="42" y2="100" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.2" />
          <line x1="60" y1="95" x2="62" y2="100" stroke="#2C2C2C" strokeWidth="0.5" opacity="0.2" />
        </>
      )}
    </svg>
  );
};

export default Teddy;
