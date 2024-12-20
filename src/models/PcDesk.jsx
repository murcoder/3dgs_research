import { forwardRef, Suspense, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Html, Outlines, Plane, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import Video from './Video.jsx';
import * as THREE from 'three';
import { Label } from '../html/Label.jsx';
import useStore from '../stores/useStore.jsx';

export const PcDesk = forwardRef(({ renderOrder, toneMapping, alphaTest }, ref) => {
  const meshRef = useRef();
  const [aspectRatio, setAspectRatio] = useState(1);
  const { t } = useTranslation();
  const [turnedOn, setIsTurnedOn] = useState(false);
  const position = { x: 4, y: 0, z: -3 };
  const rotation = [0, Math.PI / 2, 0];
  const pcPosition = { x: 4.25, y: 2.65, z: -3.55 };
  const [hoveredPc, setHoveredPc] = useState(false);
  const [isScaledUp, setIsScaledUp] = useState(false);
  const planeRef = useRef()

  // Access global store for tasks
  const { lasercutTasks, setLasercutTasks } = useStore((state) => ({
    lasercutTasks: state.lasercutTasks,
    setLasercutTasks: state.setLasercutTasks,
  }));

  const handleClick = () => {
    setIsScaledUp(!isScaledUp);

    if (!isScaledUp) {
      planeRef.current.position.y += 1;
    } else {
      planeRef.current.position.y -= 1;
    }
  };

  const taskCompleted = () => {
    // DONE - Task 4 (turn on the PC)
    if (!lasercutTasks[3].completed) {
      const updatedTasks = lasercutTasks.map((task, index) =>
        index === 3 ? { ...task, completed: true } : task
      );
      setLasercutTasks(updatedTasks);
    }
  }

  return (
    <group ref={ref}>
      <Splat
        renderOrder={renderOrder}
        scale={0.8}
        position={[position.x, position.y, position.z]}
        rotation={rotation}
        src={'./splats/pc_desk.splat'}
        toneMapped={toneMapping}
        alphaTest={alphaTest}
      />

      {/* DESK */}
      <RigidBody type="fixed" position={[0.14, -0.74, -0.26]} rotation={[0, -0.04, 0]}>
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          name="pc_desk"
          position={[4, 1.6, -3]}
          material={transparentMaterial}
        >
          <boxGeometry args={[1.82, 1.5, 1.78]} />
        </mesh>
      </RigidBody>

      {/* PC */}
      <RigidBody type="fixed" position={[0.14, -0.74, -0.29]} rotation={[0, -0.04, 0]}>
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          name="pc"
          position={[pcPosition.x, pcPosition.y, pcPosition.z]}
          onPointerEnter={(event) => {
            event.stopPropagation();
            setHoveredPc(true);
          }}
          onPointerLeave={() => {
            setHoveredPc(false);
          }}
          onPointerUp={() => {
            setIsTurnedOn(!turnedOn);
            taskCompleted()
          }}
          material={transparentMaterial}
        >
          <boxGeometry args={[0.8, 0.65, 0.3]} />
          {hoveredPc && <Outlines color="white" thickness={6} />}
        </mesh>
        {hoveredPc && (
          <Html
            center
            position={[pcPosition.x, pcPosition.y + 0.4, pcPosition.z]}
            distanceFactor={6}
            style={{ pointerEvents: 'none' }}>
            <Label
              content={t('laserDetailRoom.turnPcOnText')}
            />
          </Html>
        )}
      </RigidBody>

      {/* VIDEO */}
      {turnedOn ? (
        <Plane
          ref={planeRef}
          position={[position.x + 0.3, position.y + 2.24, position.z + 0.1]}
          rotation={[0, THREE.MathUtils.degToRad(-90), 0]}
          args={[1.6 * aspectRatio, 1.6]}
          scale={isScaledUp ? 1 : 0.35}  // Scale up or down
          onClick={handleClick}  // Toggle scale on click
        >
          <Suspense fallback={<meshStandardMaterial wireframe={true} />}>
            <Video
              src={'./assets/laser_software_tutorial.mp4'}
              onLoaded={(ratio) => setAspectRatio(ratio)}
            />
          </Suspense>
        </Plane>
      ) : null}
    </group>
  );
});
PcDesk.displayName = 'PcDesk'