import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { useRef, useState, useEffect } from 'react';
import Scene1 from './scenes/Scene1.jsx';
import Scene2 from './scenes/Scene2.jsx';
import Scene3 from './scenes/Scene3.jsx';

export default function Experience() {
  const scene1 = useRef();
  const scene2 = useRef();
  const scene3 = useRef();

  const { monitoring, debug, switchCameraControl, switchScenes } = useControls('world', {
    monitoring: false,
    switchScenes: {
      label: 'Scenes',
      options: { Scene1: 1, Scene2: 2, Scene3: 3 },
      value: 1
    },
    switchCameraControl: {
      label: 'Camera',
      options: { FirstPerson: 'player', Free: 'orbit' }
    },
    debug: true
  });

  const [currentScene, setCurrentScene] = useState(switchScenes);

  const switchToScene1 = () => {
    setCurrentScene(1);
  };
  const switchToScene2 = () => {
    setCurrentScene(2);
  };
  const switchToScene3 = () => {
    setCurrentScene(3);
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
        <Scene1 ref={scene1} debug={debug} cameraMode={switchCameraControl} laserCutterClicked={switchToScene2} doorClicked={switchToScene3}/>
      )}
      {currentScene === 2 && <Scene2 ref={scene2} debug={debug} cameraMode={switchCameraControl}/>}
      {currentScene === 3 && <Scene3 ref={scene3} debug={debug} cameraMode={switchCameraControl} laserCutterClicked={switchToScene2} doorClicked={switchToScene1}/>}
    </>
  );
}
