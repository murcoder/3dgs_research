import { CameraControls, Environment, Grid, Html, PointerLockControls, Select } from '@react-three/drei';
import { LasercutClosed } from '../models/LasercutClosed.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, startTransition, useRef, useState, useTransition } from 'react';
import { Sphere } from '../models/Sphere.jsx';
import { Floor } from '../models/Floor.jsx';
import { LasercutOpened } from '../models/LasercutOpened.jsx';
import Checklist from '../html/Checklist.jsx';
import { useControls } from 'leva';
import { Button } from '../html/Button.jsx';

const LasercutDetail = forwardRef(({debug, cameraMode, onReturnClick}, ref) => {
  const machine = useRef();
  const gridConfig = {
    gridSize: [10.5, 10.5],
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: '#6f6f6f',
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: '#c1c1c1',
    fadeDistance: 25,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  };
  const [showMachine1, setShowMachine1] = useState(true);

  const handleMachineClick = () => {
    setShowMachine1(!showMachine1);
  };

  return (
    <group ref={ref}>

      {/*<PointerLockControls />*/}
      {/*<Environment preset={'apartment'} background backgroundBlurriness={1} />*/}
      <Checklist renderPriority={2} />
      <Html>
        <Button handleClick={onReturnClick} />
      </Html>

      <Grid renderPriority={2} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />
      <Physics debug={debug} timeStep="vary">
        {showMachine1 ? (
          <LasercutClosed renderPriority={1} ref={machine} onMachineClick={handleMachineClick} />
        ) : (
          <LasercutOpened renderPriority={1} ref={machine} onMachineClick={handleMachineClick} />
        )}
        <Sphere renderPriority={3} />
        <Floor renderPriority={1} />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player
            renderPriority={5}
            alphaTest
            position={[0, 1, -3]}
            cameraPos={{ x: 0, y: 0 }}
            mode={"CameraBasedMovement"}
          />
        )}
      </Physics>
    </group>
  );
});

export default LasercutDetail;
