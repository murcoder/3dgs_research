import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useState } from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Lasercutter } from '../boundries/Lasercutter.jsx';
import { Door } from '../boundries/Door.jsx';
import { useControls } from 'leva';

const Room1 = forwardRef(({ debug, cameraMode, laserCutterClicked, doorClicked }, ref) => {
  const { show3DScan } = useControls('world', {
    show3DScan: true
  });
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
      <Physics debug={debug} timeStep="vary">
        {show3DScan ? (
          <Splat renderOrder={2} scale={1} src="./splats/lasercutter_room.splat" />
        ) : null}
        {!show3DScan ? (
          <Grid
            renderPriority={3}
            position={[0, 0, 0]}
            args={[10.5, 10.5]}
            {...gridConfig}
            renderOrder={3}
          />
        ) : null}
        <Lasercutter
          renderOrder={3}
          position={{ x: -0.04, y: 0.9, z: 1.88 }}
          boxGeometry={{ width: 2.8, height: 1.52, depth: 1.44 }}
          onMachineClick={laserCutterClicked}
        />
        <Door renderOrder={3} position={{ x: -2.4, y: 1.54, z: 2.86 }} onDoorClick={doorClicked} />
        <Floor renderOrder={1} />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player renderOrder={5} position={[-3, 1, 0]} cameraPos={{ x: 0, y: Math.PI / 2 }} />
        )}
      </Physics>
    </group>
  );
});

export default Room1;
