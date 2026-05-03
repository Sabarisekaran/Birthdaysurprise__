import React from 'react';
import Button from './Button';

interface SurpriseScreenProps {
  coloredObjects: { [key: string]: boolean };
  objectColors: { [key: string]: string };
  onCakeCut: () => void;
  onShare: () => void;
  onBack: () => void;
  cakeCut: boolean;
}

const SurpriseScreen: React.FC<SurpriseScreenProps> = ({
  coloredObjects,
  objectColors,
  onCakeCut,
  onShare,
  onBack,
  cakeCut,
}) => {
  const cakeColor = objectColors.cake || '#FFD6E8';

  return (
    <div className="app-container surprise-screen">
      {/* Back button */}
      <button className="back-button" onClick={onBack} title="Go back">
        ←
      </button>

      <div className="surprise-content">
        <h1 className="surprise-title">
          Happy Birthday <span className="birthday-name">Harshi</span> ❤️
        </h1>

        <div className="surprise-cake-container">
          <svg
            className={`surprise-cake ${cakeCut ? 'cut' : ''}`}
            viewBox="0 0 200 200"
            width="200"
            height="200"
          >
            {/* Cake base */}
            <g className={`cake-base ${cakeCut ? 'left' : ''}`}>
              <ellipse cx="95" cy="160" rx="80" ry="20" fill={cakeColor} stroke="#2C2C2C" strokeWidth="2" opacity="0.8" />
              <rect x="30" y="100" width="80" height="60" fill={cakeColor} stroke="#2C2C2C" strokeWidth="2" opacity="0.9" rx="3" />
            </g>

            <g className={`cake-base ${cakeCut ? 'right' : ''}`}>
              <ellipse cx="105" cy="160" rx="80" ry="20" fill={cakeColor} stroke="#2C2C2C" strokeWidth="2" opacity="0.7" />
              <rect x="90" y="100" width="80" height="60" fill={cakeColor} stroke="#2C2C2C" strokeWidth="2" opacity="0.8" rx="3" />
            </g>

            {/* Frosting drips */}
            <path
              d="M 40 100 Q 35 80 42 60 M 100 100 Q 95 75 105 55 M 160 100 Q 155 80 165 60"
              fill="none"
              stroke="#2C2C2C"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* Candle */}
            <rect x="97" y="40" width="6" height="35" fill="#FFE8CC" stroke="#2C2C2C" strokeWidth="1.5" />

            {/* Flame */}
            <ellipse cx="100" cy="32" rx="5" ry="8" fill="#FFB366" opacity="0.7" className={cakeCut ? 'flicker' : ''} />

            {/* Sparkles on cut */}
            {cakeCut && (
              <>
                <circle cx="90" cy="90" r="3" fill="#FFD700" className="sparkle" />
                <circle cx="110" cy="95" r="2" fill="#FFD700" className="sparkle" opacity="0.7" />
                <circle cx="100" cy="110" r="2.5" fill="#FFD700" className="sparkle" opacity="0.8" />
              </>
            )}
          </svg>
        </div>

        <p className="surprise-message">
          You deserve happiness, smiles, and everything beautiful in life. ✨
        </p>

        {!cakeCut ? (
          <div className="button-group">
            <Button
              text="Cut the Cake 🎂"
              onClick={onCakeCut}
            />
          </div>
        ) : (
          <div className="button-group">
            <p className="cake-piece">A sweet piece for you 🍰</p>
            <Button
              text="Share Cake 🍰"
              onClick={onShare}
            />
          </div>
        )}

        <div className="color-summary">
          <p className="summary-title">You colored:</p>
          <div className="colored-items">
            {Object.entries(coloredObjects).map(([name, colored]) => 
              colored && (
                <div key={name} className="colored-item">
                  <div 
                    className="color-dot" 
                    style={{ backgroundColor: objectColors[name] }}
                  />
                  <span>{name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurpriseScreen;
