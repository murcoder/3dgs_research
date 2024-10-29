import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Button({ children, handleClick }) {
  const { t } = useTranslation();
  const [showTooltip, setShowTooltip] = useState(false);

  const Tooltip = ({ text }) => (
    <div className="absolute w-20 text-center bg-black/80 text-white text-sm rounded p-1 z-50 top-32 left-0 ml-14 transform -translate-x-1/2 flex items-center justify-center h-10">
      {text}
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="z-50 h-10 w-14 flex items-center justify-center absolute top-5 left-0 mt-16 ml-4 bg-black/80 text-white text-sm rounded hover:bg-black/60 transition-colors">
        {children}
      </button>
      {showTooltip && <Tooltip text={t('buttons.back')} />}
    </div>
  );
}
