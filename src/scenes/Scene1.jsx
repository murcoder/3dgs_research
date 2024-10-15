import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useState } from 'react';
import { CameraControls } from '@react-three/drei';
import { GarageSpace1 } from '../models/GarageSpace1.jsx';

const Scene1 = forwardRef(({debug, cameraMode, laserCutterClicked, doorClicked}, ref) => {

  return (
    <group ref={ref}>
      <Physics debug={debug} timeStep="vary">
        <GarageSpace1 onMachineClick={laserCutterClicked} onDoorClick={doorClicked}/>
        <Floor />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player position={[-3, 1, 0]} cameraPos={{ x: 0, y: Math.PI / 2}} />
        )}
      </Physics>
    </group>
  );
});

export default Scene1;
