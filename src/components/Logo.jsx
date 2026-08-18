import React from 'react';

export default function Logo({ size = 'medium', className = '' }) {
  // Size presets
  const sizeClasses = {
    small: 'h-8 sm:h-9',
    medium: 'h-10 sm:h-12',
    large: 'h-16 sm:h-20',
  };

  const currentSize = sizeClasses[size] || sizeClasses.medium;

  return (
    <div className={`inline-flex items-center bg-white px-3 py-1.5 rounded-2xl shadow-sm border border-slate-200/80 hover:scale-[1.03] hover:shadow-md transition-all duration-300 ${className}`}>
      <img
        src="/images/logo_pool_brothers.png"
        alt="Pool Brothers - O Autêntico Método Americano de Piscinas de Luxo"
        className={`${currentSize} w-auto object-contain`}
      />
    </div>
  );
}
