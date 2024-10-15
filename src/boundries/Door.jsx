import React, { forwardRef, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';

export const Door = forwardRef(({ position, rotation={x:0,y:0,z:0}, boxGeometry={width:1.42, height:2.88, depth:0.1}, onDoorClick }, ref) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    setTimeout(() => {
      setHovered(true);
    }, 100);
  };
  const handlePointerOut = () => {
    setHovered(false);
  };

  return <>
    <RigidBody type="fixed">
        <mesh
          ref={meshRef}
          onClick={onDoorClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          name="door"
          position={[position.x, position.y, position.z]}
          rotation={[rotation.x,rotation.y,rotation.z]}
          material={transparentMaterial}
        >
          <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
        </mesh>
        {hovered && (
          <Html position={[0.5, 0.5, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
            <Label title={'Door'} content={'Click to change the room'} />
          </Html>
        )}
    </RigidBody>
  </>
;
});
