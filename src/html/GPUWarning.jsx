import React from 'react';

function GPUWarning({ onProceed }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <p className="mb-4 text-lg">
        Your detected GPU might not be powerful enough to run this application smoothly.
      </p>
      <button
        onClick={onProceed}
        className="bg-white hover:bg-gray-400 text-black px-6 py-3 rounded">
        Enter Anyway
      </button>
    </div>
  );
}
export default GPUWarning;
