import { Grid, PointerLockControls } from '@react-three/drei';
import { Machine1 } from './Machine1.jsx';
import { Cube } from './Models/Cube.jsx';
import Player from './Models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React from 'react';
import { Sphere2 } from './Models/Sphere2.jsx';
import { Sphere } from './Models/Sphere.jsx';
import { Floor } from './Models/Floor.jsx';

export default function Scene2() {
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
    <>
      {/*<PointerLockControls />*/}
      <Grid position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />
      <Machine1 />
      <Physics timeStep="vary">
        <Sphere />
        <Floor />
        <Player position={[0,0,-3]} cameraPos={{ x: 0, y: 0 }}/>
      </Physics>
    </>
  );
}
