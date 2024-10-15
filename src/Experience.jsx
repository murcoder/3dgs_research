import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { useRef, useState, useEffect } from 'react';
import Scene1 from './scenes/Scene1.jsx';
import Scene2 from './scenes/Scene2.jsx';

export default function Experience() {
  const scene1 = useRef();
  const scene2 = useRef();

  // Setup controls with Leva
  const { monitoring, debug, switchCameraControl, switchScenes } = useControls('world', {
    monitoring: false,
    switchScenes: {
      label: 'Scenes',
      options: { Scene1: 1, Scene2: 2 },
      value: 2
    },
    switchCameraControl: {
      label: 'Camera',
      options: { FirstPerson: 'player', Free: 'orbit' }
    },
    debug: true
  });

  const [currentScene, setCurrentScene] = useState(switchScenes);

  // Handle Laser Cutter Click
  const handleLaserCutterClicked = () => {
    console.log('Laser Cutter Clicked');
    setCurrentScene(2); // Switch to Scene2
  };

  // Effect to handle scene changes based on the switchScenes control
  useEffect(() => {
    setCurrentScene(switchScenes);
  }, [switchScenes]);

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {currentScene === 1 && (
        <Scene1 ref={scene1} debug={debug} laserCutterClicked={handleLaserCutterClicked} cameraMode={switchCameraControl} />
      )}
      {currentScene === 2 && <Scene2 ref={scene2} debug={debug} cameraMode={switchCameraControl}/>}
    </>
  );
}
