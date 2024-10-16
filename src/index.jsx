import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { StrictMode, Suspense } from 'react';
import { Leva } from 'leva';
import { Html, useProgress } from '@react-three/drei';
import NavBar from './html/NavBar.jsx';
import Experience from './Experience.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));
function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
}
const handleContextMenu = (event) => {
  event.preventDefault();
};
root.render(
  <StrictMode>
      <Leva />
      <NavBar />
      <Canvas
        shadows
        onContextMenu={handleContextMenu}
        className="r3f"
        gl={{
          antialias: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputColorSpace: THREE.SRGBColorSpace,
          pixelRatio: 0.5
        }}
        camera={{
          layers: 0,
          near: 0.1,
          far: 200,
          fov: 75,
        }}>
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </Canvas>
  </StrictMode>
);
