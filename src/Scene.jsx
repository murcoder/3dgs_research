import { Grid, OrbitControls, } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import { Garage } from './Garage.jsx';
import { Cube } from './Models/Cube.jsx';
import { Sphere } from './Models/Sphere.jsx';
import { Perf } from 'r3f-perf';
import { SplatObject } from './Models/SplatObject.jsx';
import { Floor } from './Models/Floor.jsx';
import Player from './Models/Player.jsx';
import React, { useEffect, useState } from 'react';
import { Boundries } from './Models/Boundries.jsx';

export default function Scene() {
  const { monitoring, show3DScan, debugPhysics, showGrid, switchCameraControl } = useControls('world', {
    monitoring: false,
    switchCameraControl: {
      label: 'Camera',
      options: { Orbit: 'orbit', Player: 'player' },
    },
    show3DScan: true,
    debugPhysics: true,
    showGrid: false,
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
  }

  const [pausedPhysics, setPausedPhysics] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPausedPhysics(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      {/*<OrbitControls enableZoom={false} enableDamping={false} makeDefault/>*/}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Physics debug={debugPhysics} colliders="hull" timeStep="vary" paused={pausedPhysics}>
        {show3DScan && <Garage />}
        {showGrid && <Grid position={[0, -1, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />}
        {switchCameraControl === 'orbit' ? (
          <OrbitControls enableZoom={true} enableDamping={false} makeDefault />
        ) : (
          <Player />
        )}
        <Cube />
        <Floor />
        <Boundries />
        {/*<Sphere />*/}
        {/*<SplatObject/>*/}
      </Physics>
    </>
  );
}
