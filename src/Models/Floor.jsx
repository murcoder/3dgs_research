import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';

export function Floor() {
  return <>
    <RigidBody type="fixed">
      <mesh position-y={ - 1.25 }>
        <boxGeometry args={ [ 50, 0.5, 50 ] } />
      </mesh>
    </RigidBody>
  </>;
}
