import React from "react";

export function Headline({title}) {

  return (
    <div>
      <h1 className="z-50 rounded absolute top-5 left-20 mt-16 ml-4 px-4 py-2 bg-black/60 text-white text-sm p-2 transition-colors">{title}</h1>
    </div>
  );
}
