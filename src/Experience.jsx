import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { useRef, useState, useEffect } from 'react';
import Room1 from './scenes/Room1.jsx';
import LasercutDetail from './scenes/LasercutDetail.jsx';
import Room2 from './scenes/Room2.jsx';
import TechTest from './scenes/TechTest.jsx';

export default function Experience() {
  const scene1 = useRef();
  const lasercutDetail = useRef();
  const room2 = useRef();
  const techTest = useRef();

  const { monitoring, debug, switchCameraControl, switchScenes } = useControls('world', {
    monitoring: false,
    switchScenes: {
      label: 'Scenes',
      options: { Room1: 1, Room2: 2, LasercutDetail: 3, TechTest: 4 },
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
        <Room1 ref={scene1} debug={debug} cameraMode={switchCameraControl} laserCutterClicked={switchToScene2} doorClicked={switchToScene3}/>
      )}
      {currentScene === 2 && <Room2 ref={room2} debug={debug} cameraMode={switchCameraControl} laserCutterClicked={switchToScene2} doorClicked={switchToScene1}/>}
      {currentScene === 3 && <LasercutDetail ref={lasercutDetail} debug={debug} cameraMode={switchCameraControl}/>}
      {currentScene === 4 && <TechTest ref={techTest} debug={debug} cameraMode={switchCameraControl}/>}
    </>
  );
}
