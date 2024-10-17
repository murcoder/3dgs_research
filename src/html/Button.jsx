import React from "react";

export function Button({ handleClick }) {

  return (
    <div>
      <button
        onClick={handleClick}
        className="absolute top-0 left-0 mt-16 ml-4 px-4 py-2 bg-gray-800 text-white text-sm p-2 rounded-lg hover:bg-gray-600 transition-colors"
      >
        Back
      </button>
    </div>
  );
}
