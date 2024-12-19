import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import { StrictMode, Suspense, useState, useEffect } from 'react';
import './i18n';
import { Leva } from 'leva';
import { Html, useProgress } from '@react-three/drei';
import NavBar from './html/NavBar.jsx';
import Experience from './Experience.jsx';
import LaserChecklist1 from './html/LaserChecklist1.jsx';
import useGame from './stores/useGame.jsx';
import DiscordButton from './html/DiscordButton.jsx';
import ControlsInfo from './html/ControlsInfo.jsx';
import GPUWarning from './html/GPUWarning.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

export const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
};

const handleContextMenu = (event) => {
  event.preventDefault();
};

export const  Checklist = () => {
  const currentScene = useGame((state) => state.currentScene);
  return <>{currentScene === 4 && <LaserChecklist1 />}</>;
};

export const DynamicNavBar = () => {
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

export const App = () => {
  const [isWeakGPU, setIsWeakGPU] = useState(false);
  const [proceedAnyway, setProceedAnyway] = useState(false);
  const [gpuInfo, setGpuInfo] = useState(null);

  // GPU detection logic
  useEffect(() => {
    const gl = document.createElement('canvas').getContext('webgl');
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');

    const gpuDetails = {
      vendor: gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL),
      renderer: gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL),
    };

    console.log('Your GPU', gpuDetails)
    setGpuInfo(gpuDetails);

    const isWeakGPU = (gpuDetails) => {
      const weakGPUs = ['Intel HD Graphics', 'Mali-', 'Adreno-', 'PowerVR', 'Apple M1'];
      return weakGPUs.some((name) => gpuDetails.renderer.includes(name));
    };

    setIsWeakGPU(isWeakGPU(gpuDetails));
  }, []);

  const handleProceed = () => {
    setProceedAnyway(true);
  };

  if (isWeakGPU && !proceedAnyway) {
    return (
      <GPUWarning onProceed={handleProceed} gpuInfo={gpuInfo}/>
    );
  }

  return (
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
  );
}

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
