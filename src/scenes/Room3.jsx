import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef } from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Lasercutter } from '../boundries/Lasercutter.jsx';
import { Door } from '../boundries/Door.jsx';
import { useControls } from 'leva';

const Room3 = forwardRef(({ debug, laserCutterClicked, cameraMode, doorClicked }, ref) => {
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
        {show3DScan ? <Splat renderOrder={2} scale={0.7} src="./splats/textil.splat" /> : null}
        {!show3DScan ? (
          <Grid renderOrder={3} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
        ) : null}
        {/*<Lasercutter*/}
        {/*  renderOrder={3}*/}
        {/*  position={{ x: -0.6, y: 0.9, z: 1.7 }}*/}
        {/*  boxGeometry={{ width: 1.2, height: 1.6, depth: 2.7 }}*/}
        {/*  onMachineClick={laserCutterClicked}*/}
        {/*/>*/}
        <Door
          renderOrder={3}
          position={{ x: 0.3, y: 2.3, z: -0.9 }}
          rotation={{ x: 0, y: 1.57, z: 0 }}
          onDoorClick={doorClicked}
        />
        <Floor renderOrder={1} />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player renderOrder={5} position={[-0.7, 2, -0.3]} cameraPos={{ x: 0, y: 30 }} />
        )}
      </Physics>
    </group>
  );
});

export default Room3;
