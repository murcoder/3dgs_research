import React, { forwardRef, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';

export const Lasercutter = forwardRef(
  (
    {
      position,
      boxGeometry = { width: 2.8, height: 1.52, depth: 1.44 },
      onMachineClick,
      renderOrder
    },
    ref
  ) => {
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);

    const handlePointerOver = () => {
      setTimeout(() => {
        setHovered(true);
      }, 100);
    };
    const handlePointerOut = () => {
      setHovered(false);
    };

    return (
      <>
        <RigidBody type="fixed">
          <mesh
            renderOrder={renderOrder}
            ref={meshRef}
            onClick={onMachineClick}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
            name="lasercutter_closed"
            position={[position.x, position.y, position.z]}
            material={transparentMaterial}>
            <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
          </mesh>
          {hovered && (
            <Html
              position={[0.5, 0.5, 0]}
              center
              distanceFactor={8}
              style={{ pointerEvents: 'none' }}>
              <Label title={'Lasercutter'} content={'Click me!'} />
            </Html>
          )}
        </RigidBody>
      </>
    );
  }
);
