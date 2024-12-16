import React from 'react';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  href: string;
  title: string;
  description: string;
}

export function LinkButton({ href, title, description }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden group"
    >
      <div className="p-4 sm:p-5">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {description}
            </p>
          </div>
          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0" />
        </div>
      </div>
    </a>
  );
}