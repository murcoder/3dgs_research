import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import React, { forwardRef} from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Door } from '../boundries/Door.jsx';
import { Annotation } from '../html/Annotation.jsx';
import { Wall } from '../boundries/Wall.jsx';

const Room3 = forwardRef(
  ({ debug, laserCutterClicked, cameraMode, doorClicked, toneMapping, alphaTest, show3DScan, paused }, ref) => {
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
    const wallGeometry = {
      height: 6,
      width: 10
    }
    const wallYPosition = 3

    return (
      <group ref={ref}>
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[4.5, 2.4, 3.5]}>
          <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">
            <p>Stickmaschine MRT</p>
            <ul className="text-xs pt-2">
              <li className="pb-1">Anzahl der Farben: 12</li>
              <li className="pb-1">Stickgeschwindigkeit: max. 1200 Stiche/Minute</li>
              <li className="pb-1">Stickfläche: 560mm x 360mm</li>
            </ul>
          </div>
        </Annotation>
        {show3DScan ? (
          <Splat
            renderOrder={2}
            scale={0.8}
            src="./splats/textil_low.splat"
            toneMapped={toneMapping}
            alphaTest={alphaTest}
          />
        ) : null}
        {!show3DScan ? (
          <Grid renderOrder={3} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
        ) : null}
        <Physics debug={debug} timeStep="vary" paused={paused}>
          <Door
            renderOrder={3}
            position={{ x: 0.4, y: 2.2, z: -4.6 }}
            boxGeometry={{ width: 2, height: 4.5, depth: 0.1 }}
            onDoorClick={doorClicked}
          />
          <Floor renderOrder={1} />
          <Wall
            name={"left-wall"}
            renderOrder={1}
            position={{ x: 5, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI/2, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          <Wall
            name={"right-wall"}
            renderOrder={1}
            position={{ x: -1, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI/2, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          <Wall
            name={"front-wall"}
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: 5 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          <Wall
            name={"back-wall"}
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: -4 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          {cameraMode === 'orbit' ? (
            <CameraControls />
          ) : (
            <Player
              renderOrder={5}
              position={[1, 2, -3]}
              cameraPos={{ x: 0, y: 0 }}
              autoBalance={false}
            />
          )}
        </Physics>
      </group>
    );
  }
);

export default Room3;
