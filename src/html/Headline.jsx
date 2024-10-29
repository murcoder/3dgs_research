import React from "react";

export function Headline({title}) {

  return (
    <div className="items-center justify-center">
      <h1 className="z-50 h-10 rounded mt-16 ml-4 px-4 py-2 bg-black/60 text-white text-md p-2 transition-colors">{title}</h1>
    </div>
  );
}
