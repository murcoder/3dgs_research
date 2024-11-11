import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { useRef, useEffect } from 'react';
import Room1 from './scenes/Room1.jsx';
import Room2 from './scenes/Room2.jsx';
import LasercutDetail from './scenes/LasercutDetail.jsx';
import TechTest from './scenes/TechTest.jsx';
import useGame from './stores/useGame.jsx';
import Room3 from './scenes/Room3.jsx'; // Import the store

export default function Experience() {
  const room1 = useRef();
  const room2 = useRef();
  const room3 = useRef();
  const lasercutDetail = useRef();
  const techTest = useRef();

  const { currentScene, setCurrentScene } = useGame((state) => ({
    currentScene: state.currentScene,
    setCurrentScene: state.setCurrentScene
  }));

  const { monitoring, debug, switchCameraControl } = useControls('world', {
    monitoring: false,
    scenes: {
      label: 'Scenes',
      options: { Room1: 1, Room2: 2, Room3: 3, LasercutDetail: 4, TechTest: 5 },
      default: 1,
      onChange: (slug, propName, options) => {
        if (!options.initial) {
          switchScenes(slug);
        }
      }
    },
    switchCameraControl: {
      label: 'Camera',
      options: { FirstPerson: 'player', Free: 'orbit' }
    },
    debug: false
  });

  function switchScenes(sceneNumber) {
    setCurrentScene(sceneNumber);
  }

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* Render the appropriate scene based on switchScenes */}
      {currentScene === 1 && (
        <Room1
          ref={room1}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          doorClicked={() => switchScenes(2)}
        />
      )}
      {currentScene === 2 && (
        <Room2
          ref={room2}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          door1Clicked={() => switchScenes(1)}
          door3Clicked={() => switchScenes(3)}
        />
      )}
      {currentScene === 3 && (
        <Room3
          ref={room3}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          doorClicked={() => switchScenes(2)}
        />
      )}
      {currentScene === 4 && (
        <LasercutDetail
          ref={lasercutDetail}
          debug={debug}
          cameraMode={switchCameraControl}
          onReturnClick={() => switchScenes(1)}
        />
      )}
      {currentScene === 5 && (
        <TechTest ref={techTest} debug={debug} cameraMode={switchCameraControl} />
      )}
    </>
  );
}
