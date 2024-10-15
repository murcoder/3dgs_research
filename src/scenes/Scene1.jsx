import { Garage } from '../models/Garage.jsx';
import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useState } from 'react';
import { CameraControls } from '@react-three/drei';
import { GarageSpace1 } from '../models/GarageSpace1.jsx';

const Scene1 = forwardRef(({debug, laserCutterClicked, cameraMode}, ref) => {

  return (
    <group ref={ref}>
      <Physics debug={debug} timeStep="vary">
        <GarageSpace1  onMachineClick={laserCutterClicked}/>
        <Floor />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player position={[2.3, 1, -1.5]} cameraPos={{ x: 0, y: 30 }} />
        )}
      </Physics>
    </group>
  );
});

export default Scene1;
