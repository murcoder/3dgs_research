import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import { forwardRef } from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Lasercutter } from '../boundries/Lasercutter.jsx';
import { Door } from '../boundries/Door.jsx';
import { Wall } from '../boundries/Wall.jsx';

const Room2Legacy = forwardRef(
  (
    {
      debug,
      laserCutterClicked,
      cameraMode,
      door1Clicked,
      door3Clicked,
      toneMapping,
      alphaTest,
      show3DScan,
      paused
    },
    ref
  ) => {
    const wallHeight = 6;
    const wallYPosition = 3;
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
        {show3DScan ? (
          <Splat
            renderOrder={2}
            scale={1.3}
            src="./splats/garage.splat"
            toneMapped={toneMapping}
            alphaTest={alphaTest}
          />
        ) : null}
        {!show3DScan ? (
          <Grid renderOrder={3} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
        ) : null}
        <Physics debug={debug} timeStep="vary" paused={paused}>
          <Lasercutter
            renderOrder={3}
            position={{ x: -0.6, y: 0.9, z: 1.7 }}
            boxGeometry={{ width: 1.2, height: 1.6, depth: 2.7 }}
            onMachineClick={laserCutterClicked}
          />
          <Door
            name={'room1_door'}
            renderOrder={3}
            position={{ x: 4.2, y: 1.54, z: -2.02 }}
            rotation={{ x: 0, y: 1.57, z: 0 }}
            tooltipDistanceFactor={10}
            onDoorClick={door1Clicked}
          />
          <Door
            name={'textil_door'}
            renderOrder={3}
            position={{ x: -9.15, y: 1.54, z: -0.62 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            tooltipDistanceFactor={10}
            onDoorClick={door3Clicked}
          />
          <Floor renderOrder={1} />
          <Wall
            renderOrder={1}
            position={{ x: 4, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            boxGeometry={{ width: 10, height: wallHeight, depth: 0.1 }}
          />
          <Wall
            renderOrder={1}
            position={{ x: -10, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            boxGeometry={{ width: 10, height: wallHeight, depth: 0.1 }}
          />
          <Wall
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: 3.5 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: 20, height: wallHeight, depth: 0.1 }}
          />
          <Wall
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: -3.5 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: 20, height: wallHeight, depth: 0.1 }}
          />
          {cameraMode === 'orbit' ? (
            <CameraControls />
          ) : (
            <Player
              renderOrder={5}
              position={[2.3, 1.5, -1.5]}
              cameraPos={{ x: Math.PI / 2, y: 0 }}
            />
          )}
        </Physics>
      </group>
    );
  }
);
Room2Legacy.displayName = 'Room2';
export default Room2Legacy;
