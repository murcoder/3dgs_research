import { forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Html, Outlines } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';

export const Lasercutter = forwardRef(
  (
    {
      position,
      boxGeometry = { width: 2.8, height: 1.52, depth: 1.44 },
      onMachineClick,
      renderOrder,
      distanceFactor = 6
    },
    ref
  ) => {
    const { t } = useTranslation();
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    return (
      <>
        <RigidBody type="fixed" ref={ref}>
          <mesh
            renderOrder={renderOrder}
            ref={meshRef}
            onClick={onMachineClick}
            onPointerEnter={(event) => {
              event.stopPropagation();
              setHovered(true);
              document.body.style.cursor = 'pointer';
            }}
            onPointerLeave={() => {
              setHovered(false);
              document.body.style.cursor = 'default';
            }}
            name="lasercutter_closed"
            position={[position.x, position.y, position.z]}
            material={transparentMaterial}>
            <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
            {hovered && <Outlines color="white" thickness={5} />}
          </mesh>
          {hovered && (
            <Html
              center
              position={[position.x, position.y + 1, position.z]}
              distanceFactor={distanceFactor}
              style={{ pointerEvents: 'none' }}>
              <Label title={t('boundaries.laserTitle')} content={t('boundaries.details')} />
            </Html>
          )}
        </RigidBody>
      </>
    );
  }
);
Lasercutter.displayName = 'Lasercutter';
