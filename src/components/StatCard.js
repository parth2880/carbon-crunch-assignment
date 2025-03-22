'use client';
import React from 'react';

const StatCard = ({ 
  largeText,
  title, 
  className = '',
  titleClassName = '',
  largeTextClassName = '',
}) => {  
  return (
    <div className={`rounded-lg p-3 w-full ${className}`}>
      {largeText && (
        <div className={`font-bold mb-1 ${largeTextClassName}`}>
          {largeText}
        </div>
      )}
      
      <h3 className={`leading-tight ${titleClassName}`}>
        {title}
      </h3>
    </div>
  );
};

export default StatCard;