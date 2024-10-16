import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { useRef, useState, useEffect } from 'react';
import Scene1 from './scenes/Scene1.jsx';
import Scene2 from './scenes/Scene2.jsx';
import Scene3 from './scenes/Scene3.jsx';
import { GizmoHelper, GizmoViewport } from '@react-three/drei';

export default function Experience() {
  const scene1 = useRef();
  const scene2 = useRef();
  const scene3 = useRef();

  const { monitoring, debug, switchCameraControl, switchScenes } = useControls('world', {
    monitoring: false,
    switchScenes: {
      label: 'Scenes',
      options: { Scene1: 1, Scene2: 2, Scene3: 3 },
      value: 2
    },
    switchCameraControl: {
      label: 'Camera',
      options: { FirstPerson: 'player', Free: 'orbit' }
    },
    debug: true
  });

  const [currentScene, setCurrentScene] = useState(switchScenes);

  const switchToScene = (sceneNumber) => {
    setCurrentScene(sceneNumber);
  };

  // Effect to handle scene changes based on the switchScenes control
  useEffect(() => {
    setCurrentScene(switchScenes);
  }, [switchScenes]);

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      {/*<GizmoHelper alignment="bottom-right" margin={[80, 80]} renderPriority={1}>*/}
      {/*  <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />*/}
      {/*</GizmoHelper>*/}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {currentScene === 1 && (
        <Scene1
          renderPriority={2}
          ref={scene1}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchToScene(2)}
          doorClicked={() => switchToScene(3)}
        />
      )}
      {currentScene === 2 &&
        <Scene2
          renderPriority={2}
          ref={scene2}
          debug={debug}
          cameraMode={switchCameraControl}
        />}
      {currentScene === 3 &&
        <Scene3
          renderPriority={2}
          ref={scene3}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchToScene(2)}
          doorClicked={() => switchToScene(1)}
        />}
    </>
  );
}
