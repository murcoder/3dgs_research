import React from 'react';
import { useTranslation } from 'react-i18next';

function GPUWarning({ onProceed }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <div className="flex items-center mb-14">
        <img src="./icons/logo_white.svg" alt="Logo" className="h-8 w-8 fill-white" />
        <span className="text-4xl font-extrabold text-white font-logo ml-2">
            {t('title')}
          </span>
      </div>
      <p className="mb-4 text-2xl">
        GPU Warning
      </p>
      <p className="mb-4 text-lg">
        Your detected GPU might not be powerful enough to run this application smoothly.
      </p>
      <button
        onClick={onProceed}
        className="bg-white hover:bg-gray-400 text-black uppercase font-bold px-6 py-3 rounded flex items-center justify-center space-x-2">
        <span>Enter Anyway</span>
        <img src="./icons/enter.svg" alt="Logo" className="h-6 w-6" />
      </button>

    </div>
  );
}

export default GPUWarning;
