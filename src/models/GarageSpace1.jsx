import React, { forwardRef, useRef, useState } from 'react';
import { Html, Outlines, Splat } from '@react-three/drei';
import { CuboidCollider } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';
import { useControls } from 'leva';

export const GarageSpace1 = forwardRef(({onMachineClick}, ref) => {
  const meshRef =  useRef();
  const [hovered, setHovered] = useState(false);
  const { args, position } = useControls('garage', {
    position: {
      value: { x: -0.63, y: 0.67, z: 1.75 }
    },
    args: {
      value: { x: 0.6, y: 1.1, z: 1.3 }
    }
  });

  const handlePointerOver = () => {
    setTimeout(() => {
      setHovered(true);
    }, 100);
  };
  const handlePointerOut = () => {
    setHovered(false);
  };

  return <>
    <Splat scale={1} src="./splats/lasercutter_room.splat" />
    <CuboidCollider
      rotation={[0, 0, 0]}
      position={[position.x, position.y, position.z]}
      args={[args.x, args.y, args.z]}
    />
    <mesh
      ref={meshRef}
      onClick={onMachineClick}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      name="lasercutter_closed"
      position={[-0.6, 0.9, 1.7]}
      material={transparentMaterial}>
      <boxGeometry args={[1.2, 1.6, 2.7]} />
    </mesh>
    {hovered && <Outlines color="green" thickness={8} />}
    {hovered && (
      <Html position={[0.5, 0.5, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <Label title={'Lasercutter'} content={'Click me!'} />
      </Html>
    )}
  </>;
});
