import React, { forwardRef, useRef, useState } from 'react';
import { Html, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Label } from '../html/Label.jsx';
import { transparentMaterial } from '../constants/materials.js';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { calculateTooltipPosition } from '../helper.js';

export const LasercutOpened = forwardRef(({ onMachineClick, renderOrder }, ref) => {
  const { camera, pointer } = useThree();
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState(new THREE.Vector3());

  useFrame(() => {
    // Update tooltip position every frame
    if (hovered) {
      // Convert normalized mouse coordinates to world space
      const newPostion = calculateTooltipPosition(pointer, camera)
      setTooltipPosition(newPostion);
    }
  });

  return (
    <>
      <Splat
        renderOrder={renderOrder}
        position={[-0.16, -0.04, -0.05]}
        src={'./splats/lasercutter_opened.splat'}
      />
      {/*<Lasercutter position={{x:0, y:0.9, z:-0.2}} boxGeometry={{width:2.6, height:2.04, depth:1.44}} onMachineClick={onMachineClick}/>*/}
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder + 1}
          ref={meshRef}
          onClick={onMachineClick}
          onPointerEnter={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={() => {
            setHovered(false);
          }}
          name="lasercutter_closed"
          position={[0, 0.9, -0.2]}
          material={transparentMaterial}>
          <boxGeometry args={[2.6, 2.04, 1.44]} />
        </mesh>
        {hovered && (
          <Html
            center
            position={tooltipPosition.toArray()}
            distanceFactor={8}
            style={{ pointerEvents: 'none' }}>
            <Label title={'Lasercutter'} content={'Click to close'} />
          </Html>
        )}
      </RigidBody>
    </>
  );
});
