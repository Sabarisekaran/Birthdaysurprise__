import React from 'react';

interface InstructionProps {
  steps?: string[];
  title?: string;
}

const Instruction: React.FC<InstructionProps> = ({ 
  title = 'Instructions',
  steps = ['Step 1', 'Step 2', 'Step 3'] 
}) => {
  return (
    <div className="instruction">
      <h2>{title}</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default Instruction;
