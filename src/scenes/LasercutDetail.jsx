import { CameraControls, Grid } from '@react-three/drei';
import { LasercutClosed } from '../models/LasercutClosed.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useRef, useState } from 'react';
import { Floor } from '../models/Floor.jsx';
import { LasercutOpened } from '../models/LasercutOpened.jsx';
import { PcDesk } from '../models/PcDesk.jsx';
import { Wall } from '../boundries/Wall.jsx';

const LasercutDetail = forwardRef(({ debug, cameraMode, onReturnClick }, ref) => {
  const machine = useRef();
  const pcDesk = useRef();
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
      <Grid renderOrder={1} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />

      <Physics debug={debug} timeStep="vary">
        {showMachine1 ? (
          <LasercutClosed renderOrder={2} ref={machine} openClick={handleMachineClick} />
        ) : (
          <LasercutOpened renderOrder={2} ref={machine} closeClick={handleMachineClick} />
        )}
        <PcDesk renderOrder={2} ref={pcDesk}/>
        {/*<Sphere renderOrder={4} />*/}
        <Floor renderOrder={1} />
        <Wall
          renderOrder={1}
          position={{ x: 20, y: 5, z: 0 }}
          rotation={{ x: 0, y: Math.PI/2, z: 0 }}
        />
        <Wall
          renderOrder={1}
          position={{ x: -20, y: 5, z: 0 }}
          rotation={{ x: 0, y: Math.PI/2, z: 0 }}
        />
        <Wall
          renderOrder={1}
          position={{ x: 0, y: 5, z: 20 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        <Wall
          renderOrder={1}
          position={{ x: 0, y: 5, z: -20 }}
          rotation={{ x: 0, y: 0, z: 0 }}
        />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player
            renderOrder={2}
            position={[0, 2, -3]}
            cameraPos={{ x: Math.PI, y: 0 }}
          />
        )}
      </Physics>
    </group>
  );
});

export default LasercutDetail;
