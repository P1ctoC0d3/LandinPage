import React from 'react';
import { ProfileHeader } from './components/ProfileHeader';
import { LinkButton } from './components/LinkButton';
import { BackgroundImages } from './components/BackgroundImages';
import { ProjectBook } from './components/ProjectBook';
import { CreativePanel } from './components/CreativePanel';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-purple-100">
      <BackgroundImages />
      <div className="relative z-10 flex-grow py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1.2fr_1.1fr] gap-12">
          {/* Panel izquierdo - Segundo en móvil */}
          <div className="lg:self-center order-2 lg:order-1">
            <CreativePanel />
          </div>

          {/* Panel central - Aparece primero en móvil */}
          <div className="order-1 lg:order-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <ProfileHeader />
              
              <div className="space-y-4 mt-6">
                <LinkButton
                  href="https://tuportfolio.com"
                  title="Mi Portafolio"
                  description="Explora mi colección de proyectos y trabajos más destacados"
                />
                <LinkButton
                  href="https://tublog.com"
                  title="Mi Blog Personal"
                  description="Artículos sobre desarrollo web, tecnología y experiencias"
                />
                <LinkButton
                  href="https://github.com/aitorvazz"
                  title="Proyectos en GitHub"
                  description="Revisa mis contribuciones open source y proyectos personales"
                />
              </div>
            </div>
          </div>

          {/* Panel derecho - Tercero en móvil */}
          <div className="lg:self-center order-3">
            <ProjectBook />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}