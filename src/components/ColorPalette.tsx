import React from 'react';

interface ColorPaletteProps {
  onColorSelect: (color: string) => void;
  selectedColor: string;
}

const PALETTE_COLORS = [
  { name: 'Yellow', value: '#FFD84D' },
  { name: 'Blue', value: '#7DB5FF' },
  { name: 'Red', value: '#FF6B8A' },
  { name: 'Pink', value: '#FF7EA8' },
  { name: 'Purple', value: '#B69CFF' },
  { name: 'Green', value: '#9DE3C3' },
  { name: 'Orange', value: '#FFB56B' },
];

const ColorPalette: React.FC<ColorPaletteProps> = ({ onColorSelect, selectedColor }) => {
  return (
    <div className="color-palette">
      <div className="palette-title">Select a color:</div>
      <div className="palette-colors">
        {PALETTE_COLORS.map((color) => (
          <button
            key={color.value}
            className={`palette-color ${selectedColor === color.value ? 'active' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => onColorSelect(color.value)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
