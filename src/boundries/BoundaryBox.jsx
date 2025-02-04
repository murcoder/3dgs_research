import { forwardRef, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';

export const BoundaryBox = forwardRef(
  (
    { position, boxGeometry = { width: 2.8, height: 1.52, depth: 1.44 }, renderOrder, ...props },
    ref
  ) => {
    const meshRef = useRef();

    return (
      <>
        <RigidBody type="fixed" ref={ref}>
          <mesh
            {...props}
            renderOrder={renderOrder}
            ref={meshRef}
            name="box"
            position={[position.x, position.y, position.z]}
            material={transparentMaterial}>
            <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
          </mesh>
        </RigidBody>
      </>
    );
  }
);
BoundaryBox.displayName = 'BoundaryBox';
