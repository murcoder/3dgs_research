import { forwardRef, useEffect, useRef } from 'react';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';

export const Wall = forwardRef(
  (
    {
      position,
      rotation = { x: 0, y: 5, z: 0 },
      boxGeometry = { width: 50, height: 11, depth: 0.1 },
      renderOrder = 1,
      ...props
    },
    ref
  ) => {
    const meshRef = useRef();
    useEffect(() => {
      // Do not render invisible walls (camera renders layer 0)
      if (meshRef.current) {
        meshRef.current.layers.set(1);
      }
    }, []);

    return (
      <>
        <RigidBody type="fixed" ref={ref}>
          <mesh
            {...props}
            renderOrder={renderOrder}
            ref={meshRef}
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            material={transparentMaterial}>
            <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
          </mesh>
        </RigidBody>
      </>
    );
  }
);
Wall.displayName = 'Wall';
