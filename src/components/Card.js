'use client';
import React from 'react';

const Card = ({ 
  icon, 
  title, 
  description, 
  className = '' 
}) => {
  return (  
    <div className={`overflow-hidden relative group transition-all duration-300 bg-white rounded-lg p-6 hover:scale-101 hover:shadow-sm ${className}`}>
      <div className="size-[60px] bg-green-100 flex items-center justify-center rounded-3xl mb-6">
        {icon}
      </div>
      
      <h3 className="text-primary text-2xl font-bold mb-4">
        {title}
      </h3>
      
      <p>
        {description}
      </p>

      <div className="absolute bottom-0 right-0 translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 px-2 py-1 rounded-tl-md cursor-pointer text-sm bg-primary text-white z-10">Read more</div>
    </div>
  );
};

export default Card;