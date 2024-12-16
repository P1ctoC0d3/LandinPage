import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalItems: number;
}

export function CarouselControls({ onPrev, onNext, currentIndex, totalItems }: CarouselControlsProps) {
  return (
    <>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={onPrev}
          className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={onNext}
          className="p-2 bg-white/90 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'w-6 bg-blue-500' : 'w-2 bg-gray-300'
            }`}
          />
        ))}
      </div>
    </>
  );
}