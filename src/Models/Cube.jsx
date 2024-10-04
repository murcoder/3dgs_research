import { Html, Outlines } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { RigidBody } from '@react-three/rapier';
import { Label } from '../Label.jsx';

export function Cube() {
  const cube = useRef()
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };


  return <>
    <RigidBody colliders="cuboid" position={[0.0182492304593325, 2.02, 2.5]}>
      <mesh
            castShadow
            ref={cube}
            onClick={ (event) => { event.stopPropagation();}}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}>
        <boxGeometry />
        {hovered && (
          <Outlines color="white" thickness={8} />
        )}
        {hovered && (
          <Html
            position={[0.5, 0.5, 0]}
            center
            distanceFactor={8}
          >
            <Label
              title={"This is a Cube"}
              content={"Hovering over me!"}
            />
          </Html>
        )}
        <meshStandardMaterial color={'#a7fa68'} transparent={true}/>
      </mesh>
    </RigidBody>
  </>;
}
