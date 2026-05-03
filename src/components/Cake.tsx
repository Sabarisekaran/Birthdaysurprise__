import React from 'react';

interface CakeProps {
  colored?: boolean;
  color?: string;
  onHover?: () => void;
  brushActive?: boolean;
  candleLit?: boolean;
  candleVisible?: boolean;
  showCandleGlow?: boolean;
}

const Cake: React.FC<CakeProps> = ({
  colored = false,
  color = '',
  onHover = () => {},
  candleLit = true,
  candleVisible = true,
  showCandleGlow = false,
}) => {
  const fillColor = colored ? color : '#FFFFFF';
  const strokeColor = '#2C2C2C';
  const candleClassName = [
    'cake-candle',
    candleVisible ? 'candle-visible' : 'candle-hidden',
    candleLit ? 'candle-lit' : 'candle-out',
    showCandleGlow ? 'candle-glow' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <svg
      className="cake-svg"
      viewBox="0 0 120 140"
      width="120"
      height="140"
      onMouseEnter={onHover}
      onTouchStart={onHover}
    >
      {/* Cake base */}
      <ellipse cx="60" cy="110" rx="45" ry="12" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" opacity="1" />

      {/* Cake layers */}
      <rect x="25" y="70" width="70" height="45" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" opacity="1" rx="2" />

      {/* Frosting drips */}
      <path
        d="M 30 70 Q 28 60 32 50 M 50 70 Q 48 58 53 45 M 70 70 Q 68 60 73 48 M 90 70 Q 88 62 92 52"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Candle */}
      <g className={candleClassName}>
        <rect
          x="57"
          y="40"
          width="6"
          height="25"
          fill="#FFE8CC"
          stroke={strokeColor}
          strokeWidth="1"
        />
        <ellipse cx="60" cy="35" rx="4" ry="6" fill="#FFB366" className="cake-flame" />
      </g>

      {/* Shading strokes */}
      <line x1="40" y1="85" x2="42" y2="88" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
      <line x1="60" y1="90" x2="62" y2="93" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
      <line x1="80" y1="85" x2="82" y2="88" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};

export default Cake;
