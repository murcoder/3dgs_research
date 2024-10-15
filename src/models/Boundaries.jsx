import * as THREE from 'three';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { PivotControls } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';

const wallMaterial = new THREE.MeshStandardMaterial({
  color: 'blue',
  opacity: 0.3,
  transparent: true
});

export function Boundaries() {
  // Array of refs for multiple meshes
  const refs = {
    wall1: useRef(),
    wall2: useRef(),
    wallBottom: useRef(),
    wallTop: useRef(),
    ceiling: useRef(),
    machines: useRef(),
    table: useRef(),
    tableSeats: useRef(),
    boxes: useRef()
  };

  useEffect(() => {
    // Loop through all refs and set layers to 1
    Object.values(refs).forEach((ref) => {
      if (ref.current) {
        ref.current.layers.set(1);
      }
    });
  }, []);

  return (
    <>
      <RigidBody type="fixed">
        <mesh
          name="Wall1"
          ref={refs.wall1}
          receiveShadow={false}
          rotation={[0, 0.77, 0]}
          position={[2.14, 1.6, -2]}
          material={wallMaterial}>
          <boxGeometry args={[0.5, 5, 30]} />
        </mesh>
        <mesh
          name="Wall2"
          ref={refs.wall2}
          receiveShadow={false}
          rotation={[0, 0.74, 0]}
          position={[-0.66, 1.6, 4]}
          material={wallMaterial}>
          <boxGeometry args={[0.5, 5, 30]} />
        </mesh>
        <mesh
          name="WallBottom"
          ref={refs.wallBottom}
          receiveShadow={false}
          rotation={[0, -0.77, 0]}
          position={[6.8, 1.6, 7.08]}
          material={wallMaterial}>
          <boxGeometry args={[0.5, 5, 8]} />
        </mesh>
        <mesh
          name="WallTop"
          ref={refs.wallTop}
          receiveShadow={false}
          rotation={[0, -0.77, 0]}
          position={[-2.6, 1.6, -3.12]}
          material={wallMaterial} scale={[1, 0.82, 0.86]}>
          <boxGeometry args={[0.5, 5, 8]} />
        </mesh>
        <mesh
          name="Ceiling"
          ref={refs.ceiling}
          receiveShadow={false}
          rotation={[0, -0.84, 0]}
          position={[0.36, 4.1, 0.6]}
          material={wallMaterial}>
          <boxGeometry args={[30, 0.5, 7.5]} />
        </mesh>
        <mesh
          name="Machines"
          ref={refs.machines}
          receiveShadow={false}
          rotation={[0, -0.78, 0]}
          position={[-0.16, 0.58, -1.1]}
          material={wallMaterial}>
          <boxGeometry args={[3.3, 1.6, 3.56]} />
        </mesh>
        <mesh
          name="Table"
          ref={refs.table}
          receiveShadow={false}
          rotation={[0, -0.821, 0]}
          position={[2.84, 0.72, 4.32]}
          material={wallMaterial}>
          <boxGeometry args={[3.96, 1.3, 1.3]} />
        </mesh>
        <mesh
          name="TableSeats"
          ref={refs.tableSeats}
          receiveShadow={false}
          rotation={[0, -0.83, 0]}
          position={[3, 0.58, 4.56]}
          material={wallMaterial}>
          <boxGeometry args={[5.52, 1, 2.7]} />
        </mesh>
        <mesh
          name="Boxes"
          ref={refs.boxes}
          receiveShadow={false}
          rotation={[0, -0.81, 0]}
          position={[6.78, 0.48, 4.32]}
          material={wallMaterial}>
          <boxGeometry args={[9.62, 0.68, 1.5]} />
        </mesh>
      </RigidBody>
    </>
  );
}
