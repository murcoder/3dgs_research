import React, { useState } from "react";
import { Label } from './Label.jsx';
import { Html } from '@react-three/drei';

export default function Checklist({renderOrder}) {

  return (
    <Html renderOrder={renderOrder} position={[-2.5, 2, 0]} center distanceFactor={10} style={{ pointerEvents: 'none' }}>
      <div className="relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-60 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
          <div className="p-4">
            <h1 className="text-center uppercase">Checkliste</h1>
            <p className="text-xs text-center mb-4">Erfülle alle Aufgaben</p>
            <ul className="text-xs text-left">
              <li className="mb-1">1. Getränke wegräumen</li>
              <li className="mb-1">2. Staubreste entfernen</li>
              <li className="mb-1">3. Linse reinigen</li>
              <li className="mb-1">4. Düse säubern</li>
            </ul>
          </div>
        </div>
      </div>
    </Html>
  );
}
