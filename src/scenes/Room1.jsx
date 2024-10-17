import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef, useState } from 'react';
import { CameraControls, Splat } from '@react-three/drei';
import { Lasercutter } from '../boundries/Lasercutter.jsx';
import { Door } from '../boundries/Door.jsx';

const Room1 = forwardRef(({debug, cameraMode, laserCutterClicked, doorClicked}, ref) => {

  return (
    <group ref={ref}>
      <Physics debug={debug} timeStep="vary">
        <Splat scale={1} src="./splats/lasercutter_room.splat" />
        <Lasercutter position={{x:-0.04, y:0.9, z:1.88}} boxGeometry={{width:2.8, height:1.52, depth:1.44}} onMachineClick={laserCutterClicked}/>
        <Door position={{x:-2.4, y:1.54, z:2.86}} onDoorClick={doorClicked}/>
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

export default Room1;
