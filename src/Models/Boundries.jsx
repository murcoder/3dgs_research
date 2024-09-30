import * as THREE from 'three'
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { PivotControls } from '@react-three/drei';
import { useRef, useState } from 'react';
const boxGeometry = new THREE.BoxGeometry(0.1, 8, 50)
const wallMaterial = new THREE.MeshStandardMaterial({
  color: "blue",
  opacity: 0,
  transparent: true,
});

export function Boundries() {
  const wall1 = useRef();
  const wall2 = useRef();
  // Set initial states for position and rotation
  const [meshPosition, setMeshPosition] = useState(new THREE.Vector3(0.26, 0, 4));
  const [meshRotation, setMeshRotation] = useState(new THREE.Euler(0, 0.77, 0));
  const handleOnDrag = (local) => {
    const position = new THREE.Vector3()
    const scale = new THREE.Vector3()
    const quaternion = new THREE.Quaternion()
    local.decompose(position, quaternion, scale)
    const euler = new THREE.Euler().setFromQuaternion(quaternion);
    meshPosition.copy(position)
    meshRotation.copy(euler);
  }

  const handleDragEnd = (e) => {
    if (wall2.current) {
      console.log("Position:", meshPosition);
      console.log("Rotation:", meshRotation);
    } else {
      console.error("Mesh ref is undefined");
    }
  };

  return <>
    <RigidBody type="fixed">
      <mesh
        ref={wall1}
        receiveShadow={true}
        rotation={[0, 0.77, 0]}
        position={[0, 0, -1.9]}
        geometry={ boxGeometry }
        material={ wallMaterial }
      />
    {/*<PivotControls*/}
    {/*  anchor={[0, 0, 0]}*/}
    {/*  depthTest={false}*/}
    {/*  lineWidth={4}*/}
    {/*  rotation={[0,5,0]}*/}
    {/*  axisColors={['#9381ff', '#ff4d6d', '#7ae582']}*/}
    {/*  scale={150}*/}
    {/*  fixed={true}*/}
    {/*  onDrag={handleOnDrag}*/}
    {/*  onDragEnd={handleDragEnd}*/}
    {/*>*/}
        <mesh
          ref={wall2}
          receiveShadow={true}
          rotation={meshRotation}
          position={meshPosition}
          geometry={ boxGeometry }
          material={ wallMaterial }
        />
    {/*</PivotControls>*/}
    </RigidBody>
  </>;
}
