import React from 'react';

interface ButtonProps {
  label?: string;
  text?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  label,
  text,
  onClick,
  variant = 'primary',
  disabled = false
}) => {
  // Support both 'text' and 'label' props for compatibility
  const displayText = text || label || 'Click Me'

  return (
    <button
      className={`button button-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {displayText}
    </button>
  );
};

export default Button;
