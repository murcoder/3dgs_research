import React, { useRef, useState } from 'react';
import { RigidBody } from '@react-three/rapier';

export function Sphere2() {
  const sphere = useRef();

  return (
    <>
      <RigidBody colliders="ball">
        <mesh
          ref={sphere}
          position={[0.54, 2.68, -0.06]}
          scale={0.2}>
          <sphereGeometry />
          <meshStandardMaterial color={'#f37575'} transparent={true} />
        </mesh>
      </RigidBody>
    </>
  );
}
