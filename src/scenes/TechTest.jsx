import { CameraControls, Grid, Html, Splat } from '@react-three/drei';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import { forwardRef, useRef } from 'react';
import { Floor } from '../models/Floor.jsx';
import { Wall } from '../boundries/Wall.jsx';
import { Label } from '../html/Label.jsx';

const TechTest = forwardRef(({ debug, cameraMode, toneMapping, alphaTest, show3DScan, paused }, ref) => {
  const laserRef = useRef();
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
  const laserSplatPosition = { x:-2, y:0, z:5 }
  const laserHuggingPosition = { x:-8, y:0, z:5 }
  //const laserLumaPosition = { x:-14, y:1, z:5 }

  return (
    <group ref={ref}>
      <Grid renderOrder={1} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />
      {show3DScan ? (
        <group ref={laserRef} rotation={[0, Math.PI / 2, 0]}>
          {/* ANTIMATTER15/SPLAT */}
          <Splat
            renderOrder={2}
            position={[laserSplatPosition.x, laserSplatPosition.y, laserSplatPosition.z]}
            src={'./splats/lasercutter_closed.splat'}
            toneMapped={toneMapping}
            alphaTest={alphaTest}
          />
          <Html
            center
            position={[laserSplatPosition.x, laserSplatPosition.y + 3, laserSplatPosition.z]}
            distanceFactor={8}
            style={{ pointerEvents: 'none' }}>
            <Label title={'antimatter15/splat'} content={'Created with LumaAI | exported in Luma | integrated with DREI <Splat>'} />
          </Html>

          {/* HUGGINGFACE */}
          <Splat
            renderOrder={2}
            position={[laserHuggingPosition.x, laserHuggingPosition.y, laserHuggingPosition.z]}
            src={'./splats/lasercutter_closed_huggingface.splat'}
            toneMapped={toneMapping}
            alphaTest={alphaTest}
          />
          <Html
            center
            position={[laserHuggingPosition.x, laserHuggingPosition.y + 3, laserHuggingPosition.z]}
            distanceFactor={8}
            style={{ pointerEvents: 'none' }}>
            <Label title={'Huggingface'} content={'Created with LumaAI | exported in Huggingface | integrated with DREI <Splat>'} />
          </Html>

          {/* LUMA */}
          {/*<lumaSplatsThree*/}
          {/*  renderOrder={2}*/}
          {/*  semanticsMask={LumaSplatsSemantics.FOREGROUND}*/}
          {/*  source="https://lumalabs.ai/capture/fc042829-31c6-4c14-8b74-502838c19ede"*/}
          {/*  position={[laserLumaPosition.x, laserLumaPosition.y, laserLumaPosition.z]}*/}
          {/*  rotation={[0,Math.PI,0]}*/}
          {/*  scale={0.8}*/}
          {/*  antialias={false}*/}
          {/*  particleRevealEnabled={true}*/}
          {/*/>*/}
          {/*<Html*/}
          {/*  center*/}
          {/*  position={[laserLumaPosition.x, laserLumaPosition.y+2, laserLumaPosition.z]}*/}
          {/*  distanceFactor={8}*/}
          {/*  style={{ pointerEvents: 'none' }}>*/}
          {/*  <Label title={'Luma Web Library'} content={'Integrated with Luma Web Library'} />*/}
          {/*</Html>*/}
        </group>
      ) : null}
      <Physics debug={debug} timeStep="vary" paused={paused}>
        <Floor renderOrder={1} />
        {cameraMode === 'orbit' ? (
          <CameraControls />
        ) : (
          <Player
            renderOrder={5}
            alphaTest
            position={[0, 1, -3]}
            cameraPos={{ x: 0, y: 0 }}
            mode={'CameraBasedMovement'}
            autoBalance={false}
          />
        )}
        <Wall
          renderOrder={1}
          position={{ x: 20, y: 5, z: 0 }}
          rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
        />
        <Wall
          renderOrder={1}
          position={{ x: -20, y: 5, z: 0 }}
          rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
        />
        <Wall renderOrder={1} position={{ x: 0, y: 5, z: 20 }} rotation={{ x: 0, y: 0, z: 0 }} />
        <Wall renderOrder={1} position={{ x: 0, y: 5, z: -20 }} rotation={{ x: 0, y: 0, z: 0 }} />
      </Physics>
    </group>
  );
});
TechTest.displayName = 'TechTest'
export default TechTest;
