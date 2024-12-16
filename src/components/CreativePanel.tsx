import React from 'react';
import { Clock } from 'lucide-react';
import { CarouselControls } from './CarouselControls';
import { useCarousel } from '../hooks/useCarousel';

const timelineEvents = [
  {
    year: "2020",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Inicios en Desarrollo",
    description: "Primeros pasos en el mundo del código"
  },
  {
    year: "2021",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Primer Proyecto",
    description: "Lanzamiento exitoso"
  },
  {
    year: "2022",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    title: "Reconocimiento",
    description: "Premio a la innovación"
  }
];

export function CreativePanel() {
  const { currentIndex, isTransitioning, navigate } = useCarousel(timelineEvents.length);
  const event = timelineEvents[currentIndex];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden relative" style={{ height: '500px' }}>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={event.image}
          alt={event.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-white" />
          <span className="font-bold text-white">{event.year}</span>
        </div>
        <h3 className={`text-xl font-bold mb-1 text-white transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {event.title}
        </h3>
        <p className={`text-sm text-white/90 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {event.description}
        </p>
      </div>

      <CarouselControls
        onPrev={() => navigate('prev')}
        onNext={() => navigate('next')}
        currentIndex={currentIndex}
        totalItems={timelineEvents.length}
      />
    </div>
  );
}