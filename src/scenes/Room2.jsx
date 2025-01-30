import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import { forwardRef } from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Door } from '../boundries/Door.jsx';
import { Wall } from '../boundries/Wall.jsx';
import { BoundaryBox } from '../boundries/BoundaryBox.jsx';
import { Annotation } from '../html/Annotation.jsx';
import { ElectronicsDetailsTable } from '../html/ElectronicsDetailsTable.jsx';
import { BambuDetails } from '../html/BambuDetails.jsx';
import { PrusaDetails } from '../html/PrusaDetails.jsx';
import { BambuFilament } from '../html/BambuFilament.jsx';
import { PrusaFilament } from '../html/PrusaFilament.jsx';

const Room2 = forwardRef(
  (
    { debug, cameraMode, door1Clicked, door3Clicked, toneMapping, alphaTest, show3DScan, paused },
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
        {/* ELECTRONICS */}
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[8, 3, -4]}>
          <ElectronicsDetailsTable/>
        </Annotation>

        {/* PRUSA - 3D PRINTER */}
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[6, 2.5, 4.5]}>
          <PrusaDetails/>
        </Annotation>
        <Annotation
          iconPath={'./icons/change.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[7.6, 2, 4.5]}>
          <PrusaFilament/>
        </Annotation>

        {/* BAMBU - 3D PRINTER */}
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[-3, 2.5, 5]}>
          <BambuDetails/>
        </Annotation>
        <Annotation
          iconPath={'./icons/change.svg'}
          iconStyle={'fill-white'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[-2, 3, 4.5]}>
          <BambuFilament/>
        </Annotation>
        {show3DScan ? (
          <Splat
            renderOrder={2}
            scale={1}
            src="./splats/room2_1.splat"
            toneMapped={toneMapping}
            alphaTest={alphaTest}
          />
        ) : null}
        {!show3DScan ? (
          <Grid renderOrder={3} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
        ) : null}
        <Physics debug={debug} timeStep="vary" paused={paused}>
          <Door
            name={'room1_door'}
            renderOrder={3}
            boxGeometry={{ width: 2, height: 5, depth: 0.1 }}
            position={{ x: -9.5, y: 2, z: 3 }}
            rotation={{ x: 0, y: 1.57, z: 0 }}
            tooltipDistanceFactor={10}
            onDoorClick={door1Clicked}
          />
          <Door
            name={'textil_door'}
            renderOrder={3}
            position={{ x: 10, y: 1.54, z: -0.62 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            tooltipDistanceFactor={10}
            onDoorClick={door3Clicked}
          />
          <Floor renderOrder={1} />
          <BoundaryBox
            name={'pc_table'}
            renderOrder={3}
            position={{ x: 1.4, y: 0.9, z: 3 }}
            boxGeometry={{ width: 3, height: 1.6, depth: 5}}
          />
          <Wall
            name={'front'}
            renderOrder={1}
            position={{ x: 9, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            boxGeometry={{ width: 10, height: wallHeight, depth: 0.1 }}
          />
          <Wall
            name={'back'}
            renderOrder={1}
            position={{ x: -7.5, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            boxGeometry={{ width: 10, height: wallHeight, depth: 0.1 }}
          />
          <Wall
            name={'right'}
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: 3.5 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: 20, height: wallHeight, depth: 0.1 }}
          />
          <Wall
            name={'left'}
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: -2.5 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: 20, height: wallHeight, depth: 0.1 }}
          />
          {cameraMode === 'orbit' ? (
            <CameraControls />
          ) : (
            <Player
              renderOrder={5}
              position={[-3.5, 2, 0]}
              cameraPos={{ x: 0, y: Math.PI / 2 }}
              autoBalance={false}
            />
            // <Player renderOrder={5} position={[4, 1, 0]} cameraPos={{ x: 0, y: 0 }} />
          )}
        </Physics>
      </group>
    );
  }
);
Room2.displayName = 'Room2Part1'
export default Room2;
