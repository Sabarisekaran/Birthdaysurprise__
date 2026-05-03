import React from 'react';

interface GiftBoxProps {
  colored?: boolean;
  color?: string;
  onHover?: () => void;
  brushActive?: boolean;
}

const GiftBox: React.FC<GiftBoxProps> = ({ colored = false, color = '', onHover = () => {} }) => {
  const fillColor = colored ? color : 'none';
  const strokeColor = colored ? color : '#2C2C2C';

  return (
    <svg
      className="gift-svg"
      viewBox="0 0 80 90"
      width="60"
      height="70"
      style={{ position: 'absolute', left: '20px', bottom: '40px', zIndex: 2 }}
      onMouseEnter={onHover}
      onTouchStart={onHover}
    >
      <rect x="15" y="40" width="50" height="40" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" opacity={colored ? 1 : 0.6} rx="2" />
      <rect x="15" y="30" width="50" height="12" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" opacity={colored ? 1 : 0.5} rx="2" />
      <circle cx="40" cy="30" r="8" fill={fillColor} stroke={strokeColor} strokeWidth="1.5" opacity={colored ? 1 : 0.6} />
      <line x1="40" y1="30" x2="40" y2="80" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="30" x2="15" y2="55" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
      <line x1="40" y1="30" x2="65" y2="55" stroke={strokeColor} strokeWidth="1" opacity="0.5" />
      <line x1="25" y1="50" x2="27" y2="52" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
      <line x1="50" y1="50" x2="52" y2="52" stroke={strokeColor} strokeWidth="0.5" opacity="0.2" />
    </svg>
  );
};

export default GiftBox;
