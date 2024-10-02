import { RigidBody } from '@react-three/rapier';
import { useEffect, useRef } from 'react';

export function Floor() {
  const floor = useRef();
  useEffect(() => {
    // Do not render invisible walls (camera renders layer 0)
    if (floor.current) {
      floor.current.layers.set(1);
    }
  }, []);

  return <>
    <RigidBody type="fixed">
      <mesh  ref={floor} position-y={-1.25} receiveShadow={true}>
        <boxGeometry args={[50, 0.5, 50]} />
        <meshStandardMaterial color="white" opacity={0} transparent={true}/>
      </mesh>
    </RigidBody>
  </>;
}
