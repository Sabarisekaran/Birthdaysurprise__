import React from 'react';

interface BannerProps {
  message?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

const Banner: React.FC<BannerProps> = ({ message = 'Banner Message', type = 'info' }) => {
  return (
    <div className={`banner banner-${type}`}>
      <p>{message}</p>
    </div>
  );
};

export default Banner;
