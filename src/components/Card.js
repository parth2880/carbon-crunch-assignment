'use client';
import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (
    <div className={`bg-white rounded-lg p-6 ${className}`}>
      <div className="size-[60px] bg-green-100 flex items-center justify-center rounded-3xl mb-6">
        {icon}
      </div>
      
      <h3 className="text-primary text-2xl font-bold mb-4">
        {title}
      </h3>
      
      <p>
        {description}
      </p>
    </div>
  );
};

export default Card;