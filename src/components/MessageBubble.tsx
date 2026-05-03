import React from 'react';

interface MessageBubbleProps {
  message: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div className="message-bubble-container">
      <div className="message-bubble">
        <p>{message}</p>
        <div className="bubble-tail" />
      </div>
    </div>
  );
};

export default MessageBubble;
