import { Grid, PointerLockControls, Select } from '@react-three/drei';
import { Machine1 } from '../Models/Machine1.jsx';
import Player from '../Models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useRef, useState } from 'react';
import { Sphere } from '../Models/Sphere.jsx';
import { Floor } from '../Models/Floor.jsx';
import { Machine2 } from '../Models/Machine2.jsx';

const Scene2 = forwardRef(({debug}, ref) => {

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
      <Grid position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />
      <Physics debug={debug} timeStep="vary">
        {showMachine1 ? (
          <Machine1 onMachineClick={handleMachineClick} />
        ) : (
          <Machine2 onMachineClick={handleMachineClick} />
        )}
        <Sphere />
        <Floor />
        <Player alphaTest position={[0, 1, -3]} cameraPos={{ x: 0, y: 0 }} mode={"CameraBasedMovement"} />
      </Physics>
    </group>
  );
});

export default Scene2;