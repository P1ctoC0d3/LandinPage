import React from 'react';

export function BackgroundImages() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80"
          alt="Background Left"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
          alt="Background Right"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}