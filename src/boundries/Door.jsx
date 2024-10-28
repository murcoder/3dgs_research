import React, { forwardRef, useRef, useState } from 'react';
import { Html, Outlines } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { calculateTooltipPosition } from '../helper.js';

export const Door = forwardRef(
  (
    {
      position,
      rotation = { x: 0, y: 0, z: 0 },
      boxGeometry = { width: 1.42, height: 2.88, depth: 0.1 },
      onDoorClick,
      renderOrder
    },
    ref
  ) => {
    const { camera, pointer } = useThree();
    const meshRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState(new THREE.Vector3());

    useFrame(() => {
      // Update tooltip position every frame
      if (hovered) {
        // Convert normalized mouse coordinates to world space
        const newPostion = calculateTooltipPosition(pointer, camera);
        setTooltipPosition(newPostion);
      }
    });

    return (
      <>
        <RigidBody type="fixed">
          <mesh
            renderOrder={renderOrder}
            ref={meshRef}
            onClick={onDoorClick}
            onPointerEnter={(event) => {
              event.stopPropagation();
              setHovered(true);
            }}
            onPointerLeave={() => {
              setHovered(false);
            }}
            name="door"
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            material={transparentMaterial}>
            <boxGeometry args={[boxGeometry.width, boxGeometry.height, boxGeometry.depth]} />
            {hovered && <Outlines color="white" thickness={5} />}
          </mesh>
          {hovered && (
            <Html
              center
              position={tooltipPosition.toArray()}
              distanceFactor={3}
              style={{ pointerEvents: 'none' }}>
              <Label title={'Change Room'} content={'Click to access this room'} />
            </Html>
          )}
        </RigidBody>
      </>
    );
  }
);
