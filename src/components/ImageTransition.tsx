import React from 'react';

interface ImageTransitionProps {
  src: string;
  alt: string;
  isTransitioning: boolean;
}

export function ImageTransition({ src, alt, isTransitioning }: ImageTransitionProps) {
  return (
    <div className="relative h-64">
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
}