import React from 'react';
import { useTranslation } from 'react-i18next';

export function Button({ children, handleClick }) {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        className="z-50 h-10 w-14 flex items-center justify-center absolute top-5 left-0 mt-16 ml-4 bg-black/80 text-white text-sm rounded hover:bg-black/60 transition-colors">
        {children}
      </button>
    </div>
  );
}
