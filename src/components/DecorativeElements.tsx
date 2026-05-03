import React from 'react';

const DecorativeElements: React.FC = () => {
  return (
    <svg className="decorative-elements" viewBox="0 0 400 800" width="100%" height="100%" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <path d="M 50 150 L 55 145 L 60 150 L 60 155 Q 60 160 55 160 Q 50 160 50 155 Z" fill="none" stroke="#FFB6C1" strokeWidth="0.8" opacity="0.3" />
      <path d="M 350 200 L 355 195 L 360 200 L 360 205 Q 360 210 355 210 Q 350 210 350 205 Z" fill="none" stroke="#FFB6C1" strokeWidth="0.8" opacity="0.3" />
      <path d="M 80 500 L 85 495 L 90 500 L 90 505 Q 90 510 85 510 Q 80 510 80 505 Z" fill="none" stroke="#FFB6C1" strokeWidth="0.8" opacity="0.2" />
      <path d="M 320 600 L 325 595 L 330 600 L 330 605 Q 330 610 325 610 Q 320 610 320 605 Z" fill="none" stroke="#FFB6C1" strokeWidth="0.8" opacity="0.2" />
      <path d="M 100 700 L 105 695 L 110 700 L 110 705 Q 110 710 105 710 Q 100 710 100 705 Z" fill="none" stroke="#FFB6C1" strokeWidth="0.8" opacity="0.25" />
      <polygon points="150,100 152,105 150,110 148,105" fill="none" stroke="#8B7C7C" strokeWidth="0.5" opacity="0.15" />
      <polygon points="280,250 282,255 280,260 278,255" fill="none" stroke="#8B7C7C" strokeWidth="0.5" opacity="0.15" />
      <polygon points="120,350 122,355 120,360 118,355" fill="none" stroke="#8B7C7C" strokeWidth="0.5" opacity="0.1" />
      <polygon points="330,450 332,455 330,460 328,455" fill="none" stroke="#8B7C7C" strokeWidth="0.5" opacity="0.1" />
    </svg>
  );
};

export default DecorativeElements;
