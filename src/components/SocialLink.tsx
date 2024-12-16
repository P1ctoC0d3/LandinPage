import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-gray-600 hover:text-blue-500 border border-gray-200"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}