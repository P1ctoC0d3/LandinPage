import { useState, useCallback } from 'react';

export function useCarousel(itemCount: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = useCallback((direction: 'next' | 'prev') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    const timer = window.setTimeout(() => {
      if (direction === 'next') {
        setCurrentIndex((prev) => (prev + 1) % itemCount);
      } else {
        setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
      }
      setIsTransitioning(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [itemCount, isTransitioning]);

  return {
    currentIndex,
    isTransitioning,
    navigate
  };
}