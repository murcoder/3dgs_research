import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import React, { useRef, useEffect } from 'react';
import Room1 from './scenes/Room1.jsx';
import Room2 from './scenes/Room2.jsx';
import LasercutDetail from './scenes/LasercutDetail.jsx';
import TechTest from './scenes/TechTest.jsx';
import useGame from './stores/useGame.jsx';  // Import the store

export default function Experience() {
  const room1 = useRef();
  const room2 = useRef();
  const lasercutDetail = useRef();
  const techTest = useRef();

  // Get switchScenes from global state
  const { switchScenes, setSwitchScenes } = useGame((state) => ({
    switchScenes: state.switchScenes,
    setSwitchScenes: state.setSwitchScenes
  }));

  const { monitoring, debug, switchCameraControl } = useControls('world', {
    monitoring: false,
    switchScenes: {
      label: 'Scenes',
      options: { Room1: 1, Room2: 2, LasercutDetail: 3, TechTest: 4 },
      onChange: (value) => setSwitchScenes(value),
    },
    switchCameraControl: {
      label: 'Camera',
      options: { FirstPerson: 'player', Free: 'orbit' },
    },
    debug: false,
  });

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      {/* Render the appropriate scene based on switchScenes */}
      {switchScenes === 1 && (
        <Room1
          ref={room1}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => setSwitchScenes(3)}
          doorClicked={() => setSwitchScenes(2)}
        />
      )}
      {switchScenes === 2 && (
        <Room2
          ref={room2}
          debug={debug}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => setSwitchScenes(3)}
          doorClicked={() => setSwitchScenes(1)}
        />
      )}
      {switchScenes === 3 && (
        <LasercutDetail
          ref={lasercutDetail}
          debug={debug}
          cameraMode={switchCameraControl}
          onReturnClick={() => setSwitchScenes(1)}
        />
      )}
      {switchScenes === 4 && (
        <TechTest
          ref={techTest}
          debug={debug}
          cameraMode={switchCameraControl}
        />
      )}
    </>
  );
}
