import { CameraControls, Grid, Splat } from '@react-three/drei';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef } from 'react';
import { Floor } from '../models/Floor.jsx';

const TechTest = forwardRef(({ debug, cameraMode }, ref) => {
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

  return (
    <group ref={ref}>
      <Grid renderOrder={1} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
      <Splat renderOrder={2} position={[10, 0, 0]} src={'./splats/lasercutter_closed.splat'} />
      <Splat
        renderOrder={2}
        position={[10, 0, 0]}
        src={'./splats/lasercutter_closed_huggingface.splat'}
      />
      <Physics debug={debug} timeStep="vary">
        <Floor renderOrder={1} />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player
            renderOrder={5}
            alphaTest
            position={[0, 1, -3]}
            cameraPos={{ x: 0, y: 0 }}
            mode={'CameraBasedMovement'}
          />
        )}
      </Physics>
    </group>
  );
});

export default TechTest;
