import React, { forwardRef, useRef, useState } from 'react';
import { Html, Outlines } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Label } from '../html/Label.jsx';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import {calculateTooltipPosition} from '../helper.js';

export const Lasercutter = forwardRef(
  (
    {
      position,
      boxGeometry = { width: 2.8, height: 1.52, depth: 1.44 },
      onMachineClick,
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
        const newPostion = calculateTooltipPosition(pointer, camera)
        setTooltipPosition(newPostion);
      }
    });

    return (
      <>
        <RigidBody type="fixed">
          <mesh
            renderOrder={renderOrder}
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
            position={[position.x, position.y, position.z]}
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
              <Label title={'Lasercutter'} content={'Click for more details'} />
            </Html>
          )}
        </RigidBody>
      </>
    );
  }
);
