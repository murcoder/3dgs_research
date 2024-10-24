import React, { forwardRef, useRef, useState } from 'react';
import { Html, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Label } from '../html/Label.jsx';
import { transparentMaterial } from '../constants/materials.js';
import {calculateTooltipPosition} from '../helper.js';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const LasercutClosed = forwardRef(({ onMachineClick, renderOrder }, ref) => {
  const meshRef = useRef();
  const { camera, pointer } = useThree();
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

  function Annotation({ children, ...props }) {
    return (
      <Html
        {...props}
        transform
      >
        <div className="annotation" onClick={() => console.log('.')}>
          {children}
        </div>
      </Html>
    )
  }

  return (
    <>
      {/*<Annotation position={[1.75, 3, 2.5]}>*/}
      {/*  Steuerung <span style={{ fontSize: '1.5em' }}>🌗</span>*/}
      {/*</Annotation>*/}
      <Splat renderOrder={renderOrder} scale={0.85} src={'./splats/lasercutter_closed.splat'} />
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder+1}
          ref={ref || meshRef}
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
            <Label title={'Lasercutter'} content={'Click to open'} />
          </Html>
        )}
      </RigidBody>
    </>
  );
});
