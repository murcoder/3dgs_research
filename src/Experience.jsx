import { CameraControls, PointerLockControls, Html } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import { Cube } from './Models/Cube.jsx';
import { Perf } from 'r3f-perf';
import { Floor } from './Models/Floor.jsx';
import Player from './Models/Player.jsx';
import React, { useRef, useState, useEffect } from 'react';
import Scene1 from './Scene1.jsx';
import Scene2 from './Scene2.jsx';
import { useSpring, animated } from '@react-spring/three';
import Scene3 from './Scene3.jsx';

export default function Experience() {
  const scene1 = useRef();
  const scene2 = useRef();
  const scene3 = useRef();

  const { monitoring, debug, switchCameraControl, switchScenes } =
    useControls('world', {
      monitoring: false,
      switchScenes: {
        label: 'Scenes',
        options: { Scene1: 1, Scene2: 2, Scene3: 3 }
      },
      switchCameraControl: {
        label: 'Camera',
        options: { FirstPerson: 'player', Free: 'orbit' }
      },
      debug: true,
    });

  // State to keep track of the current scene and its visibility
  const [currentScene, setCurrentScene] = useState(switchScenes);
  const [fadeIn, setFadeIn] = useState(true);

  // Effect to handle scene changes and triggering fade animations
  useEffect(() => {
    setFadeIn(false); // Start fade out animation when the scene changes
    const timeoutId = setTimeout(() => {
      setCurrentScene(switchScenes);
      setFadeIn(true); // Fade in the new scene
    }, 500); // 500ms for the fade-out duration, adjust as needed

    return () => clearTimeout(timeoutId);
  }, [switchScenes]);

  // Spring animation for fade effect using @react-spring/three
  const { opacity } = useSpring({
    opacity: fadeIn ? 1 : 0,
    config: { duration: 500 }, // Duration for the fade-in/out effect
  });

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {/*<Physics debug={debug} timeStep="vary">*/}
      {/*  <Floor />*/}
      {/*</Physics>*/}
      {/* Render only the current scene with fade effect */}
      {currentScene === 1 && (
        <animated.group style={{ opacity }}>
          <Scene1 ref={scene1} />
        </animated.group>
      )}
      {currentScene === 2 && (
        <animated.group style={{ opacity }}>
          <Scene2 ref={scene2} />
        </animated.group>
      )}
      {currentScene === 3 && (
        <animated.group style={{ opacity }}>
          <Scene3 ref={scene3} />
        </animated.group>
      )}
    </>
  );
}
