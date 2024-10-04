import { Html, Outlines, Sparkles } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react';
import { Label } from '../Label.jsx';

export function Handle({ onClickHandle }) {
  const handle = useRef()
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <>
      <mesh
        ref={handle}
        onClick={(event) => {
          event.stopPropagation();
          onClickHandle();
        }}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        position={[0.72, 1.26, -0.08]} scale={[1.12, 0.42, 0.72]} rotation={[0, 0.7853981633974485, 0]}>
        <boxGeometry args={[0, 0, 0]} />
        <Sparkles size={2} speed={0.3} scale={[1,2,1]} opacity={0.6}/>
        {hovered && <Outlines color="white" thickness={3} />}
        {hovered && (
          <Html position={[0.5, 0.5, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
            <Label title={'This is a an Interaction point'} content={'Press me!'} />
          </Html>
        )}
        <meshStandardMaterial color={'#a7fa68'} transparent={true} />
      </mesh>
    </>
  );
}
