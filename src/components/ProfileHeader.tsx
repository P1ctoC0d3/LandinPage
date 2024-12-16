import React, { useState } from 'react';
import { Github, Linkedin, Mail, CircleUserRound } from 'lucide-react';
import { SocialLink } from './SocialLink';

const profileImages = [
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=200&h=200"
];

export function ProfileHeader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const rotateImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
  };

  return (
    <div className="text-center mb-8">
      <div className="relative inline-block">
        <img
          src={profileImages[currentImageIndex]}
          alt="Foto de perfil"
          onClick={rotateImage}
          className="w-36 h-36 rounded-full mx-auto mb-4 border-4 border-white hover:border-blue-300 transition-colors cursor-pointer object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Aitor Vazquez Poza
      </h1>

      <p className="text-gray-600 mb-6 max-w-sm mx-auto text-sm">
        Apasionado por crear experiencias web increíbles y soluciones innovadoras
      </p>

      <div className="flex justify-center gap-4">
        <SocialLink href="https://about.me" icon={CircleUserRound} label="About.me" />
        <SocialLink href="https://github.com" icon={Github} label="GitHub" />
        <SocialLink href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
        <SocialLink href="mailto:tu@email.com" icon={Mail} label="Email" />
      </div>
    </div>
  );
}