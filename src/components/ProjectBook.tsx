import React from 'react';
import { CarouselControls } from './CarouselControls';
import { useCarousel } from '../hooks/useCarousel';

const projects = [
  {
    title: "Proyecto 1",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description: "Desarrollo web responsive"
  },
  {
    title: "Proyecto 2",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description: "Aplicación móvil"
  },
  {
    title: "Proyecto 3",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    description: "Diseño UI/UX"
  }
];

export function ProjectBook() {
  const { currentIndex, isTransitioning, navigate } = useCarousel(projects.length);
  const project = projects[currentIndex];

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden relative" style={{ height: '500px' }}>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className={`text-xl font-bold mb-1 text-white transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {project.title}
        </h3>
        <p className={`text-sm text-white/90 transition-opacity duration-300 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}>
          {project.description}
        </p>
      </div>

      <CarouselControls
        onPrev={() => navigate('prev')}
        onNext={() => navigate('next')}
        currentIndex={currentIndex}
        totalItems={projects.length}
      />
    </div>
  );
}