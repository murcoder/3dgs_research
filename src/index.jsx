import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import React, { StrictMode, Suspense, useState } from 'react';
import './i18n';
import { Leva } from 'leva';
import { Html, useProgress } from '@react-three/drei';
import NavBar from './html/NavBar.jsx';
import Experience from './Experience.jsx';
import LaserChecklist1 from './html/LaserChecklist1.jsx';
import useGame from './stores/useGame.jsx';
import DiscordButton from './html/DiscordButton.jsx';
import GPUWarning from './html/GPUWarning';
import ControlsInfo from './html/ControlsInfo';

const root = ReactDOM.createRoot(document.querySelector('#root'));

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
}

const handleContextMenu = (event) => {
  event.preventDefault();
};

const Checklist = () => {
  const currentScene = useGame((state) => state.currentScene);
  return <>{currentScene === 4 && <LaserChecklist1 />}</>;
};

const DynamicNavBar = () => {
  const { currentScene, setCurrentScene } = useGame((state) => ({
    currentScene: state.currentScene,
    setCurrentScene: state.setCurrentScene,
  }));

  const handleBackClick = () => {
    setCurrentScene(1);
  };

  return (
    <>
      {currentScene === 4 ? (
        <NavBar
          closeDetailClick={handleBackClick}
          showDetailBar={true}
          detailTitle={'Lasercutter | Speedy 100 Flex'}
        />
      ) : (
        <NavBar />
      )}
    </>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

function App() {
  const [showWarning, setShowWarning] = useState(true);

  const handleProceed = () => {
    setShowWarning(false);
  };

  return (
    <>
      {showWarning ? (
        <GPUWarning onProceed={handleProceed} />
      ) : (
        <>
          <Leva />
          <DynamicNavBar />
          <Checklist />
          <DiscordButton />
          <Canvas
            shadows
            onContextMenu={handleContextMenu}
            className="r3f"
            gl={{
              antialias: false,
              toneMapping: THREE.ACESFilmicToneMapping,
              outputColorSpace: THREE.SRGBColorSpace,
              pixelRatio: 2,
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
          <ControlsInfo />
        </>
      )}
    </>
  );
}
