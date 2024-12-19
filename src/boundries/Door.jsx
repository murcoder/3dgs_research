import { forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Html, Outlines } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';

export const Door = forwardRef(
  (
    {
      position,
      rotation = { x: 0, y: 0, z: 0 },
      boxGeometry = { width: 1.42, height: 2.88, depth: 0.1 },
      onDoorClick,
      renderOrder,
      tooltipDistanceFactor = 6,
      ...props
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
            {...props}
            renderOrder={renderOrder}
            ref={meshRef}
            onClick={onDoorClick}
            onPointerEnter={(event) => {
              event.stopPropagation();
              setHovered(true);
            }}
            onPointerLeave={() => {
              setHovered(false);
            }}
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            material={transparentMaterial}>
            <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
            {hovered && <Outlines color="white" thickness={5} />}
          </mesh>
          {hovered && (
            <Html
              center
              position={[position.x, position.y + 1, position.z]}
              distanceFactor={tooltipDistanceFactor}
              style={{ pointerEvents: 'none' }}>
              <Label title={t('boundaries.doorTitle')} content={t('boundaries.doorText')} />
            </Html>
          )}
        </RigidBody>
      </>
    );
  }
);
Door.displayName = 'Door';
