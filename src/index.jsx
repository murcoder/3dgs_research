import './style.css';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import React, { StrictMode, Suspense } from 'react';
import './i18n';
import { Leva } from 'leva';
import { Html, useProgress } from '@react-three/drei';
import NavBar from './html/NavBar.jsx';
import Experience from './Experience.jsx';
import LaserChecklist1 from './html/LaserChecklist1.jsx';
import useGame from './stores/useGame.jsx';
import { Button } from './html/Button.jsx';
import { Headline } from './html/Headline.jsx';
import DiscordButton from './html/DiscordButton.jsx';

const root = ReactDOM.createRoot(document.querySelector('#root'));

function Loader() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)}%</Html>;
}

const handleContextMenu = (event) => {
  event.preventDefault();
};

const Checklist = () => {
  const currentScene = useGame((state) => state.currentScene);
  return <>{currentScene === 4 && <LaserChecklist1 />}</>;
};

// const DynamicTitleBar = () => {
//   const { currentScene, setCurrentScene } = useGame((state) => ({
//     currentScene: state.currentScene,
//     setCurrentScene: state.setCurrentScene
//   }));
//
//   const handleBackClick = () => {
//     setCurrentScene(1);
//   };
//
//   return (
//     <>
//       {currentScene === 3 && (
//         <div className="bg-black/80 justify-center items-center text-center">
//           <h1 className="z-50 h-10 text-white text-lg">Lasercutter - Speedy 100 Flex</h1>
//           <Button handleClick={handleBackClick}>
//             <img src="./icons/close_icon.svg" alt="close_icon" className="w-5 h-5" />
//           </Button>
//         </div>
//       )}
//     </>
//   );
// };

const DynamicNavBar = () => {
  const { currentScene, setCurrentScene } = useGame((state) => ({
    currentScene: state.currentScene,
    setCurrentScene: state.setCurrentScene
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
        // <div className="bg-black/80 justify-center items-center text-center">
        //   <h1 className="z-50 h-10 text-white text-lg">Lasercutter - Speedy 100 Flex</h1>
        //   <Button handleClick={handleBackClick}>
        //     <img src="./icons/close_icon.svg" alt="close_icon" className="w-5 h-5" />
        //   </Button>
        // </div>
        <NavBar />
      )}
    </>
  );
};

// const DynamicHeadline = () => {
//   const { currentScene, setCurrentScene } = useGame((state) => ({
//     currentScene: state.currentScene,
//     setCurrentScene: state.setCurrentScene
//   }));
//
//   const handleBackClick = () => {
//     setCurrentScene(1);
//   };
//
//   return <>{currentScene === 3 && <Headline title={'Lasercutter - Speedy 100 Flex'} />}</>;
// };

root.render(
  <StrictMode>
    <Leva />
    {/*<DynamicHeadline />*/}
    <NavBar />
    <DynamicNavBar />
    {/*<DynamicTitleBar />*/}
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
        pixelRatio: 2
      }}
      camera={{
        layers: 0,
        near: 0.1,
        far: 200,
        fov: 75
      }}>
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    </Canvas>
  </StrictMode>
);
