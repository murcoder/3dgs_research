import { Floor } from '../models/Floor.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import { forwardRef} from 'react';
import { CameraControls, Grid, Splat } from '@react-three/drei';
import { Door } from '../boundries/Door.jsx';
import { Annotation } from '../html/Annotation.jsx';
import { Wall } from '../boundries/Wall.jsx';
import useStore from '../stores/useStore.jsx';

const Room3Low = forwardRef(
  ({ debug, cameraMode, doorClicked, toneMapping, alphaTest, show3DScan, paused }, ref) => {
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

    // Access global store for tasks
    const { textileTasks, setTextileTasks } = useStore((state) => ({
      textileTasks: state.textileTasks,
      setTextileTasks: state.setTextileTasks,
    }));

    const handleEmbroideryHover = () => {
      // DONE - Task 1 (find the embroidery machine)
      if (!textileTasks[0].completed) {
        const updatedTasks = textileTasks.map((task, index) =>
          index === 0 ? { ...task, completed: true } : task
        );
        setTextileTasks(updatedTasks);
      }
    };

    const handleSewingHover = () => {
      // DONE - Task 2 (find the sewing machine)
      if (!textileTasks[1].completed) {
        const updatedTasks = textileTasks.map((task, index) =>
          index === 1 ? { ...task, completed: true } : task
        );
        setTextileTasks(updatedTasks);
      }
    };

    return (
      <group ref={ref}>
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          onHover={handleEmbroideryHover}
          position={[0.5, 2.4, 3.5]}>
          <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">
            <p>Stickmaschine MRT</p>
            <ul className="text-xs pt-2">
              <li className="pb-1">Anzahl der Farben: 12</li>
              <li className="pb-1">Stickgeschwindigkeit: max. 1200 Stiche/Minute</li>
              <li className="pb-1">Stickfläche: 560mm x 360mm</li>
            </ul>
          </div>
        </Annotation>
        <Annotation
          iconPath={'./icons/info_icon.svg'}
          cursorStyle={'cursor-help'}
          renderOrder={3}
          onHover={handleSewingHover}
          position={[2, 2, -1]}>
          <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">
            <p>Singer 29k51</p>
            <ul className="text-xs pt-2">
              <li className="pb-1">Freiarm</li>
              <li className="pb-1">Für dickes mehrlagiges Leder</li>
              <li className="pb-1">Nahtrichtung frei wählbar</li>
              <li className="pb-1">Hand- bzw. Fussbetrieben</li>
            </ul>
          </div>
        </Annotation>
        {show3DScan ? (
          <Splat
            renderOrder={2}
            scale={0.8}
            src="./splats/textil_300k_splats.splat"
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
            position={{ x: -3, y: 2.2, z: -5 }}
            boxGeometry={{ width: 2, height: 4.5, depth: 0.1 }}
            onDoorClick={doorClicked}
          />
          <Floor renderOrder={1} />
          <Wall
            name={'left-wall'}
            renderOrder={1}
            position={{ x: 2, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          <Wall
            name={'right-wall'}
            renderOrder={1}
            position={{ x: -4, y: wallYPosition, z: 0 }}
            rotation={{ x: 0, y: Math.PI / 2, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          <Wall
            name={'front-wall'}
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: 4 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          <Wall
            name={'back-wall'}
            renderOrder={1}
            position={{ x: 0, y: wallYPosition, z: -5 }}
            rotation={{ x: 0, y: 0, z: 0 }}
            boxGeometry={{ width: wallGeometry.width, height: wallGeometry.height, depth: 0.1 }}
          />
          {cameraMode === 'orbit' ? (
            <CameraControls />
          ) : (
            <Player
              renderOrder={5}
              position={[-2.8, 1, -4]}
              cameraPos={{ x: Math.PI, y: 0 }}
              autoBalance={false}
            />
          )}
        </Physics>
      </group>
    );
  }
);
Room3Low.displayName = 'Room3Low'
export default Room3Low;
