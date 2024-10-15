import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Html, Outlines, Splat } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import { useControls } from 'leva';
import { Label } from '../html/Label.jsx';
import { transparentMaterial} from '../constants/materials.js';

export const Machine1 = forwardRef(({ onMachineClick }, ref) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { args, position } = useControls('machine1', {
    position: {
      value: { x: 0, y: 0.9, z: -0.2 }
    },
    args: {
      value: { x: 1.3, y: 1, z: 0.7 }
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

  return (
    <RigidBody type="fixed" colliders={false}>
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
        position={[-0.04, 0.9, -0.2]}
        material={transparentMaterial}>
        <boxGeometry args={[2.6, 2.04, 1.44]} />
      </mesh>
      {hovered && <Outlines color="green" thickness={8} />}
      {hovered && (
        <Html position={[0.5, 0.5, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
          <Label title={'Lasercutter'} content={'Open me!'} />
        </Html>
      )}
      <Splat scale={0.85} src={'./splats/lasercutter_closed.splat'} />
    </RigidBody>
  );
});
