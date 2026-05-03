import React from 'react';

interface BalloonsProps {
  colored?: boolean;
  color?: string;
  onHover?: () => void;
  brushActive?: boolean;
}

const Balloons: React.FC<BalloonsProps> = ({ colored = false, color = '', onHover = () => {} }) => {
  const strokeColor = colored ? color : '#2C2C2C'
  const balloonColors = ['#FFD6E8', '#FFE6F0', '#FCE1EC', '#FFD1E1', '#FFE8F2']
  const hearts = [
    { x: 22, y: 28, size: 12, lineEnd: 70 },
    { x: 46, y: 22, size: 12, lineEnd: 72 },
    { x: 70, y: 28, size: 12, lineEnd: 70 },
    { x: 32, y: 50, size: 10, lineEnd: 76 },
    { x: 62, y: 50, size: 10, lineEnd: 78 },
  ]

  return (
    <svg
      className="balloons-svg"
      viewBox="0 0 100 140"
      width="90"
      height="130"
      style={{ position: 'absolute', left: '10px', top: '30px', zIndex: 3 }}
      onMouseEnter={onHover}
      onTouchStart={onHover}
    >
      {hearts.map((heart, index) => {
        const fill = colored ? color : balloonColors[index % balloonColors.length]
        return (
          <g key={index} opacity={colored ? 1 : 0.75}>
            <path
              d={`M ${heart.x} ${heart.y} c -${heart.size} -${heart.size} -${heart.size * 2} ${heart.size * 0.4} 0 ${heart.size * 1.6} c ${heart.size * 2} -${heart.size * 1.2} ${heart.size * 2} -${heart.size * 1.2} 0 -${heart.size * 2.6} c -${heart.size * 2} ${heart.size * 1.4} -${heart.size * 2} ${heart.size * 1.4} 0 ${heart.size * 2.6} c ${heart.size * 2} -${heart.size * 1.2} ${heart.size * 2} -${heart.size * 1.2} 0 -${heart.size * 2.6} c ${heart.size * 2} ${heart.size * 1.2} ${heart.size * 2} ${heart.size * 1.2} 0 ${heart.size * 2.6}`}
              fill={fill}
              stroke={strokeColor}
              strokeWidth="1.3"
            />
            <line
              x1={heart.x}
              y1={heart.y + heart.size * 1.6}
              x2={heart.x}
              y2={heart.lineEnd}
              stroke={strokeColor}
              strokeWidth="1"
              opacity="0.5"
            />
          </g>
        )
      })}
    </svg>
  )
}

export default Balloons;
