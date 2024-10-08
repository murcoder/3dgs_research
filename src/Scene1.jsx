import { Garage } from './Garage.jsx';
import { Cube } from './Models/Cube.jsx';
import { Floor } from './Models/Floor.jsx';
import { CameraControls } from '@react-three/drei';
import Player from './Models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React from 'react';

export default function Scene1() {

  return (
    <>
      <Garage />
      <Physics timeStep="vary">
        <Cube />
        <Floor />
        <Player position={[2.3,0,-1.5]} cameraPos={{ x: 0, y: 30 }}/>
      </Physics>
    </>
  );
}
