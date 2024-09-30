import { RigidBody } from '@react-three/rapier';

export function Floor() {
  return <>
    <RigidBody type="fixed">
      <mesh position-y={-1.25} receiveShadow={true}>
        <boxGeometry args={[50, 0.5, 50]} />
        <meshStandardMaterial color="white" opacity={0} transparent={true}/>
      </mesh>
    </RigidBody>
  </>;
}
