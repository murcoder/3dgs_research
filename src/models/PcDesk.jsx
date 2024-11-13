import React, { forwardRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';

export const PcDesk = forwardRef(({ renderOrder }, ref) => {
  const meshRef = useRef();
  const splatRef = useRef();
  const { t } = useTranslation();
  const position = { x: 4, y: 0, z: -3 };
  const rotation = [0, Math.PI / 2, 0];

  return (
    <>
      <Splat
        ref={splatRef}
        renderOrder={renderOrder}
        scale={0.8}
        position={[position.x, position.y, position.z]}
        rotation={rotation}
        src={'./splats/pc_desk.splat'}
      />
      <RigidBody type="fixed" position={[0.14, -0.74, -0.26]} rotation={[0, -0.04, 0]}>
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          name="pc_desk"
          position={[4, 2, -3]}
          material={transparentMaterial}
        >
          <boxGeometry args={[1.82, 2.52, 1.78]} />
        </mesh>
      </RigidBody>
    </>
  );
});
