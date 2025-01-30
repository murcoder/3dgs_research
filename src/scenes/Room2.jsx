import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import { forwardRef } from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Door } from '../boundries/Door.jsx';
import { Wall } from '../boundries/Wall.jsx';
import { BoundaryBox } from '../boundries/BoundaryBox.jsx';
import { Annotation } from '../html/Annotation.jsx';
import { ElectronicsDetailsTable } from '../hotspots/ElectronicsDetailsTable.jsx';
import { BambuDetails } from '../hotspots/BambuDetails.jsx';
import { PrusaDetails } from '../hotspots/PrusaDetails.jsx';
import { BambuFilament } from '../hotspots/BambuFilament.jsx';
import { PrusaFilament } from '../hotspots/PrusaFilament.jsx';
import { SolderingDetailsTable } from '../hotspots/SolderingDetailsTable.jsx';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    return (
      <group ref={ref}>
        {/* ELECTRONICS */}
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[7.5, 2.8, -4]}>
          <ElectronicsDetailsTable />
        </Annotation>
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[9.4, 2.7, -4]}>
          <SolderingDetailsTable />
        </Annotation>

        {/* PRUSA - 3D PRINTER */}
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[6, 2.5, 4.5]}>
          <PrusaDetails />
        </Annotation>
        <Annotation
          iconPath={'./icons/change.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[7.6, 2, 4.5]}>
          <PrusaFilament />
        </Annotation>

        {/* BAMBU - 3D PRINTER */}
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[-3, 2.5, 5]}>
          <BambuDetails />
        </Annotation>
        <Annotation
          iconPath={'./icons/change.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          position={[-2, 3, 4.5]}>
          <BambuFilament />
        </Annotation>

        {/* TEXTILE AREA */}
        <Annotation
          iconPath={'./icons/enter_white.svg'}
          iconStyle={'w-20 h-20 fill-white'}
          cursorStyle={'cursor-pointer w-40 h-40'}
          renderOrder={3}
          position={[14, 3, -0.62]}
          onClick={door3Clicked}>
          <div className="absolute bg-black/80 -top-48 -right-52 w-[600px] h-40 text-center text-white text-4xl rounded-xl p-6">
              <strong>{t('textile.changeRoom.title')}</strong>
              <br />
              {t('textile.changeRoom.text')}
            </div>
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
          <Floor renderOrder={1} />
          <BoundaryBox
            name={'pc_table'}
            renderOrder={3}
            position={{ x: 1.4, y: 0.9, z: 3 }}
            boxGeometry={{ width: 3, height: 1.6, depth: 5 }}
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
