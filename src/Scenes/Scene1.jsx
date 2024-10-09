import { Garage } from '../Models/Garage.jsx';
import { Floor } from '../Models/Floor.jsx';
import Player from '../Models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useState } from 'react';

const Scene1 = forwardRef(({debug, laserCutterClicked}, ref) => {

  return (
    <group ref={ref}>
      <Physics debug={debug} timeStep="vary">
        <Garage  onMachineClick={laserCutterClicked}/>
        <Floor />
        <Player position={[2.3, 1, -1.5]} cameraPos={{ x: 0, y: 30 }} />
      </Physics>
    </group>
  );
});

export default Scene1;