import React from 'react';

export function Footer() {
  return (
    <footer className="w-full text-center py-6">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} - Creado con ❤️
      </p>
    </footer>
  );
}