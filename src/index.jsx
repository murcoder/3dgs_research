import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Scene from './Scene.jsx';
import * as THREE from 'three';
import { StrictMode, Suspense } from 'react';
import { Leva } from 'leva';
import { Html, useProgress } from '@react-three/drei';

const root = ReactDOM.createRoot(document.querySelector('#root'));
function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
}

root.render(
  <StrictMode>
    <Leva collapsed />
    <Canvas
      className="r3f"
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        outputColorSpace: THREE.SRGBColorSpace
      }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4]
      }}>
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
  </StrictMode>
);
