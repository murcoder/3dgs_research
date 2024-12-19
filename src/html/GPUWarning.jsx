import React from 'react';
import { useTranslation } from 'react-i18next';

function GPUWarning({ onProceed, gpuInfo }) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <div className="flex items-center mb-14">
        <img src="./icons/logo_white.svg" alt="Logo" className="h-10 w-10 fill-white" />
        <span className="text-4xl font-extrabold text-white font-logo ml-2">{t('title')}</span>
      </div>
      <p className="mb-4 text-2xl">GPU Warning</p>
      <p className="mb-4 text-lg">
        Your graphics card may not be powerful enough to run this 3D-Application smoothly.
      </p>
      <button
        onClick={onProceed}
        className="bg-white hover:bg-gray-400 text-black uppercase font-bold px-6 py-3 rounded flex items-center justify-center space-x-2">
        <span>Enter Anyway</span>
        <img src="./icons/enter.svg" alt="Logo" className="h-6 w-6" />
      </button>
      <div
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center text-xs text-center">
        <div className="mb-2">
          <img src="./icons/info_circle.svg" alt="Info Icon" className="h-6 w-6" />
        </div>
        <p>{gpuInfo.vendor}</p>
        <p>{gpuInfo.renderer}</p>
      </div>
    </div>
  );
}

export default GPUWarning;
