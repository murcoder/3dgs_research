import { Garage } from '../models/Garage.jsx';
import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useState } from 'react';
import { CameraControls } from '@react-three/drei';

const Scene3 = forwardRef(({debug, laserCutterClicked, cameraMode, doorClicked}, ref) => {

  return (
    <group ref={ref}>
      <Physics debug={debug} timeStep="vary">
        <Garage  onMachineClick={laserCutterClicked} onDoorClick={doorClicked}/>
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

export default Scene3;
