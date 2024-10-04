import { Html, Outlines, Sparkles } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useControls } from 'leva';
import { Label } from '../Label.jsx';
import { RigidBody } from '@react-three/rapier';

export function Sphere() {
  const sphere = useRef();
  const [hovered, setHovered] = useState(false);
  const { scale, position } = useControls('sphere', {
    position: {
      value: { x: 3, y: 2.4, z: 4 }
    },
    scale: {
      value: 0.3,
      step: 0.01,
      min: 0,
      max: 5
    }
  });

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <>
      <RigidBody colliders="ball">
        <mesh
          ref={sphere}
          position={[position.x, position.y, position.z]}
          scale={scale}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}>
          <sphereGeometry />
          <Sparkles />
          <meshStandardMaterial color={"#f37575"} transparent={true} />
          {hovered && <Outlines color="white" thickness={5} />}
          {hovered && (
            <Html position={[0.5, 0.5, 0]} center distanceFactor={8}>
              <Label title={'This is a Sphere'} content={'Hovering over me!'} />
            </Html>
          )}
        </mesh>
      </RigidBody>
    </>
  );
}
