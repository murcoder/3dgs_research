import React, { forwardRef, useRef, useState } from 'react';
import { Html, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Label } from '../html/Label.jsx';
import { transparentMaterial} from '../constants/materials.js';

export const LasercutOpened = forwardRef(({ onMachineClick, renderOrder }, ref) => {
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

  return (
    <>
      <Splat renderOrder={renderOrder} position={[-0.16, -0.04, -0.05]} src={'./splats/lasercutter_opened.splat'} />
      {/*<Lasercutter position={{x:0, y:0.9, z:-0.2}} boxGeometry={{width:2.6, height:2.04, depth:1.44}} onMachineClick={onMachineClick}/>*/}
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder+1}
          ref={meshRef}
          onClick={onMachineClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
          name="lasercutter_closed"
          position={[0, 0.9, -0.2]}
          material={transparentMaterial}
        >
          <boxGeometry args={[2.6, 2.04, 1.44]} />
        </mesh>
        {hovered && (
          <Html position={[0.5, 0.5, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
            <Label title={'Lasercutter'} content={'Click me!'} />
          </Html>
        )}
      </RigidBody>
    </>
  );
});
