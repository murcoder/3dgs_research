import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useRef, useEffect, useState } from 'react';
import Room1 from './scenes/Room1.jsx';
import Room2 from './scenes/Room2.jsx';
import LasercutDetail from './scenes/LasercutDetail.jsx';
import TechTest from './scenes/TechTest.jsx';
import useStore from './stores/useStore.jsx';
import Room3 from './scenes/Room3.jsx';
import Room2Part1 from './scenes/Room2Part1.jsx';
import Room3Low from './scenes/Room3Low.jsx';

export default function Experience() {
  const room1 = useRef();
  const room2 = useRef();
  const room3 = useRef();
  const lasercutDetail = useRef();
  const techTest = useRef();

  const { currentScene, setCurrentScene } = useStore((state) => ({
    currentScene: state.currentScene,
    setCurrentScene: state.setCurrentScene
  }));

  const { monitoring, debug, switchCameraControl } = useControls('world', {
    monitoring: false,
    scenes: {
      label: 'Scenes',
      options: { Room1: 1, Room2: 2, Room3: 3, LasercutDetail: 4, TechTest: 5, Room2Legacy: 6, Room3Low: 7 },
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
  const {alphaTest, toneMapping, show3DScan } = useControls('Splats', {
    show3DScan: true,
    alphaTest: {
      value: 0,
      min: 0,
      max: 0.99,
      step: 0.01
    },
    toneMapping: false
    },
    { collapsed: true } );

  const [paused, setPaused] = useState(false);
  useEffect(() => {
    setPaused(true);
    const timer = setTimeout(() => {
      setPaused(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

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
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          doorClicked={() => switchScenes(2)}
          paused={paused}
        />
      )}
      {currentScene === 2 && (
        <Room2Part1
          ref={room2}
          debug={debug}
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          door1Clicked={() => switchScenes(1)}
          door3Clicked={() => switchScenes(3)}
          paused={paused}
        />
      )}
      {currentScene === 3 && (
        <Room3
          ref={room3}
          debug={debug}
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          doorClicked={() => switchScenes(2)}
          paused={paused}
        />
      )}
      {currentScene === 7 && (
        <Room3Low
          ref={room3}
          debug={debug}
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          doorClicked={() => switchScenes(2)}
          paused={paused}
        />
      )}
      {currentScene === 4 && (
        <LasercutDetail
          ref={lasercutDetail}
          debug={debug}
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          onReturnClick={() => switchScenes(1)}
          paused={paused}
        />
      )}
      {currentScene === 5 && (
        <TechTest
          ref={techTest}
          debug={debug}
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          paused={paused}
        />
      )}
      {currentScene === 6 && (
        <Room2
          ref={room2}
          debug={debug}
          alphaTest={alphaTest}
          toneMapping={toneMapping}
          show3DScan={show3DScan}
          cameraMode={switchCameraControl}
          laserCutterClicked={() => switchScenes(4)}
          door1Clicked={() => switchScenes(1)}
          door3Clicked={() => switchScenes(3)}
          paused={paused}
        />
      )}
    </>
  );
}
