import { CameraControls, Grid } from '@react-three/drei';
import { LasercutClosed } from '../models/LasercutClosed.jsx';
import Player from '../models/Player.jsx';
import { Physics } from '@react-three/rapier';
import { forwardRef, useRef, useState } from 'react';
import { Floor } from '../models/Floor.jsx';
import { LasercutOpened } from '../models/LasercutOpened.jsx';
import { PcDesk } from '../models/PcDesk.jsx';
import { Wall } from '../boundries/Wall.jsx';
import useStore from '../stores/useStore.jsx';

const LasercutDetail = forwardRef(
  ({ debug, cameraMode, toneMapping, alphaTest, paused }, ref) => {
    const machine = useRef();
    const pcDesk = useRef();
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
    const [showMachine1, setShowMachine1] = useState(true);

    // Access global store for tasks
    const { lasercutTasks, setLasercutTasks } = useStore((state) => ({
      lasercutTasks: state.lasercutTasks,
      setLasercutTasks: state.setLasercutTasks,
    }));

    const handleMachineClick = () => {
      setShowMachine1(!showMachine1);

      // DONE - Task 2 (open the lid)
      if (!lasercutTasks[1].completed) {
        const updatedTasks = lasercutTasks.map((task, index) =>
          index === 1 ? { ...task, completed: true } : task
        );
        setLasercutTasks(updatedTasks);
      }
    };

    return (
      <group ref={ref}>
        <Grid renderOrder={1} position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />

        <Physics debug={debug} timeStep="vary" paused={paused}>
          {showMachine1 ? (
            <LasercutClosed
              renderOrder={2}
              ref={machine}
              openClick={handleMachineClick}
              toneMapping={toneMapping}
              alphaTest={alphaTest}
            />
          ) : (
            <LasercutOpened
              renderOrder={2}
              ref={machine}
              closeClick={handleMachineClick}
              toneMapping={toneMapping}
              alphaTest={alphaTest}
            />
          )}
          <PcDesk renderOrder={2} ref={pcDesk} toneMapping={toneMapping} alphaTest={alphaTest} />
          {/*<Sphere renderOrder={4} />*/}
          <Floor renderOrder={1} />
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
          {cameraMode === 'orbit' ? (
            <CameraControls />
          ) : (
            <Player
              renderOrder={5}
              alphaTest
              position={[0, 3, -3]}
              cameraPos={{ x: 0, y: 0 }}
              autoBalance={false}
            />
          )}
        </Physics>
      </group>
    );
  }
);
LasercutDetail.displayName = 'LasercutDetail'
export default LasercutDetail;
