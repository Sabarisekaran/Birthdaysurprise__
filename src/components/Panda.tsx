import React from 'react';

interface PandaProps {
  colored?: boolean;
  color?: string;
  onHover?: () => void;
  onTap?: () => void;
  message?: string;
  brushActive?: boolean;
  expression?: 'default' | 'happy' | 'wave' | 'heart' | 'point' | 'thinking' | 'question';
}

const Panda: React.FC<PandaProps> = ({
  colored = false,
  color = '',
  onHover = () => {},
  onTap = () => {},
  message = "Happy Birthday Harshi! 🎉",
  expression = 'default',
}) => {
  const bodyFill = '#FFFFFF';
  const bodyStroke = '#2C2C2C';
  const accentFill = colored && color ? color : '#FFB6C1';

  return (
    <div className="panda-container">
      <svg
        className="panda-svg"
        viewBox="0 0 100 130"
        width="85"
        height="120"
        style={{ cursor: 'pointer', position: 'relative', zIndex: 10 }}
        onMouseEnter={onHover}
        onTouchStart={onHover}
        onClick={onTap}
      >
        {/* Body */}
        <ellipse 
          cx="50" 
          cy="85" 
          rx="28" 
          ry="32" 
          fill={bodyFill} 
          stroke={bodyStroke} 
          strokeWidth="2" 
          opacity="0.9"
        />

        {/* Head */}
        <circle 
          cx="50" 
          cy="45" 
          r="26" 
          fill={bodyFill} 
          stroke={bodyStroke} 
          strokeWidth="2" 
          opacity="0.95"
        />

        {/* Ears */}
        <circle cx="28" cy="18" r="12" fill="#222222" stroke={bodyStroke} strokeWidth="1.5" />
        <circle cx="72" cy="18" r="12" fill="#222222" stroke={bodyStroke} strokeWidth="1.5" />

        {/* Eye patches */}
        <ellipse cx="38" cy="38" rx="8" ry="11" fill="#222222" opacity="0.8" />
        <ellipse cx="62" cy="38" rx="8" ry="11" fill="#222222" opacity="0.8" />

        {/* Eyes - NEVER colored */}
        <circle cx="38" cy="37" r="3.5" fill="white" stroke={bodyStroke} strokeWidth="1" />
        <circle cx="62" cy="37" r="3.5" fill="white" stroke={bodyStroke} strokeWidth="1" />

        {/* Pupils - NEVER colored */}
        <circle cx="38" cy="38" r="1.5" fill={bodyStroke} />
        <circle cx="62" cy="38" r="1.5" fill={bodyStroke} />

        {/* Nose - NEVER colored */}
        <circle cx="50" cy="50" r="2.5" fill={bodyStroke} />

        {/* Mouth - varies by expression */}
        {expression === 'happy' && (
          <path
            d="M 46 58 Q 50 62 54 58"
            fill="none"
            stroke={bodyStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
        {expression === 'question' && (
          <text x="50" y="62" textAnchor="middle" fontSize="14" fontWeight="bold" fill={bodyStroke}>
            ?
          </text>
        )}
        {(expression === 'default' || expression === 'wave' || expression === 'heart' || expression === 'point') && (
          <path
            d="M 47 57 Q 50 59 53 57"
            fill="none"
            stroke={bodyStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}
        {expression === 'thinking' && (
          <path
            d="M 48 56 L 52 56"
            fill="none"
            stroke={bodyStroke}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        )}

        {/* Arms */}
        <ellipse 
          cx="22" 
          cy="80" 
          rx="11" 
          ry="16" 
          fill={bodyFill} 
          stroke={bodyStroke} 
          strokeWidth="2" 
          opacity="0.8"
        />
        <ellipse 
          cx="78" 
          cy="80" 
          rx="11" 
          ry="16" 
          fill={bodyFill} 
          stroke={bodyStroke} 
          strokeWidth="2" 
          opacity="0.8"
        />

        {colored && color && (
          <>
            <circle cx="34" cy="48" r="3.5" fill={accentFill} opacity="0.18" />
            <circle cx="66" cy="48" r="3.5" fill={accentFill} opacity="0.18" />
          </>
        )}

        {/* Special gestures */}
        {expression === 'heart' && (
          <path
            d="M 65 70 Q 70 65 75 68 Q 77 70 75 75 Q 70 78 65 70"
            fill="#FFB6C1"
            stroke="#FF69B4"
            strokeWidth="1"
          />
        )}

        {expression === 'wave' && (
          <>
            <path
              d="M 75 65 Q 85 55 92 50"
              fill="none"
              stroke={bodyStroke}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M 90 48 L 95 45 L 92 52"
              fill={bodyStroke}
            />
          </>
        )}

        {expression === 'point' && (
          <>
            <path
              d="M 75 75 L 90 65"
              fill="none"
              stroke={bodyStroke}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="90" cy="64" r="2" fill={bodyStroke} />
          </>
        )}

        {/* Party hat on top */}
        <path
          d="M 50 8 L 45 18 L 55 18 Z"
          fill="#FFB6C1"
          stroke={bodyStroke}
          strokeWidth="1.5"
        />
        <circle cx="50" cy="6" r="2" fill="white" stroke={bodyStroke} strokeWidth="1" />

        {/* Feet */}
        <ellipse 
          cx="35" 
          cy="115" 
          rx="9" 
          ry="11" 
          fill={bodyFill} 
          stroke={bodyStroke} 
          strokeWidth="1.5" 
          opacity="0.7"
        />
        <ellipse 
          cx="65" 
          cy="115" 
          rx="9" 
          ry="11" 
          fill={bodyFill} 
          stroke={bodyStroke} 
          strokeWidth="1.5" 
          opacity="0.7"
        />
      </svg>

      {/* Speech bubble */}
      {message && (
        <div className="speech-bubble">
          <p>{message}</p>
          <div className="bubble-tail" />
        </div>
      )}
    </div>
  );
};

export default Panda;
