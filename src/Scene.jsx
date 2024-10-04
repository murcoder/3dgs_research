import { CameraControls, Grid } from '@react-three/drei';
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
import { Boundaries } from './Models/Boundaries.jsx';

export default function Scene() {
  const { monitoring, show3DScan, debug, showGrid, switchCameraControl } =
    useControls('world', {
      monitoring: false,
      switchCameraControl: {
        label: 'Camera',
        options: { Free: 'orbit', FirstPerson: 'player' }
      },
      show3DScan: true,
      debug: false,
      showGrid: false
    });


  const [pausePhysics, setPausePhysics] = useState(true);

  useEffect(() => {
    if (switchCameraControl) {
      if (switchCameraControl === 'orbit') {
        setPausePhysics(true);
      } else if (switchCameraControl === 'player') {
        setPausePhysics(false);
      }
    }
  }, [switchCameraControl]);

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
      {monitoring && <Perf position="top-left" />}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {showGrid && (
        <Grid position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />
      )}
      <Physics debug={debug} paused={pausePhysics} timeStep="vary">
        <Cube />
        <Sphere />
        <Boundaries />
        <SplatObject />
        <Floor />
        {switchCameraControl === 'orbit' ? (
          // TODO - Add fixed camera positions: https://yomotsu.github.io/camera-controls/examples/basic.html
          <CameraControls pan={false} />
        ) : (
          <Player />
        )}
      </Physics>
      {show3DScan && <Garage />}
    </>
  );
}
