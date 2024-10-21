import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef } from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Lasercutter } from '../boundries/Lasercutter.jsx';
import { Door } from '../boundries/Door.jsx';
import { useControls } from 'leva';

const Room2 = forwardRef(({ debug, laserCutterClicked, cameraMode, doorClicked }, ref) => {
  const { use3DScan } = useControls('world', {
    use3DScan: true
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
        {use3DScan ? <Splat renderOrder={2} scale={1.3} src="./splats/garage.splat" /> : null}
        {!use3DScan ? (
          <Grid renderOrder={3} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
        ) : null}
        <Lasercutter
          renderOrder={3}
          position={{ x: -0.6, y: 0.9, z: 1.7 }}
          boxGeometry={{ width: 1.2, height: 1.6, depth: 2.7 }}
          onMachineClick={laserCutterClicked}
        />
        <Door
          renderOrder={3}
          position={{ x: 4.2, y: 1.54, z: -2.02 }}
          rotation={{ x: 0, y: 1.57, z: 0 }}
          onDoorClick={doorClicked}
        />
        <Floor renderOrder={1} />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player renderOrder={5} position={[2.3, 1, -1.5]} cameraPos={{ x: 0, y: 30 }} />
        )}
      </Physics>
    </group>
  );
});

export default Room2;
