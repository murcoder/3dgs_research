import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';

export function Floor() {


  return <>
    <RigidBody type="fixed">
      <mesh position-y={ - 1.25 }>
        <boxGeometry args={ [ 10, 0.5, 10 ] } />
      </mesh>
    </RigidBody>
  </>;
}
