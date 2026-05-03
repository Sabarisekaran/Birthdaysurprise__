import React, { useState, useEffect } from 'react';

interface HintSystemProps {
  coloredCount: number;
}

const HintSystem: React.FC<HintSystemProps> = ({ coloredCount: _coloredCount }) => {
  const hints = [
    "Try coloring the cake 🎂",
    "Make teddy cute 🧸",
    "Don't forget the panda 🐼",
  ];

  const [currentHint, setCurrentHint] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHint((prev) => (prev + 1) % hints.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [hints.length]);

  return (
    <div className="hint-system">
      <p className="hint-text">{hints[currentHint]}</p>
      <div className="hint-dots">
        {hints.map((_, index) => (
          <div
            key={index}
            className={`hint-dot ${index === currentHint ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HintSystem;
