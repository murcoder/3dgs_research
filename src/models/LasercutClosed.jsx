import React, { forwardRef, useRef, useState } from 'react';
import { Html, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Label } from '../html/Label.jsx';
import { transparentMaterial } from '../constants/materials.js';
import { calculateTooltipPosition } from '../helper.js';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { MachineDetailsTable } from '../html/MachineDetailsTable.jsx';
import { Annotation } from '../html/Annotation.jsx';

export const LasercutClosed = forwardRef(({ onMachineClick, renderOrder }, ref) => {
  const meshRef = useRef();
  const { camera, pointer } = useThree();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Annotation iconPath={"./icons/info_icon.svg"} cursorStyle={"cursor-help"} renderOrder={3} position={[1, 2, 0]}>
        <MachineDetailsTable />
      </Annotation>
      <Annotation onClick={onMachineClick} iconPath={"./icons/open_icon.svg"} cursorStyle={"cursor-pointer"} renderOrder={3} position={[-0.4, 1.8, -0.3]}>
        <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none"><p>Click to open</p></div>
      </Annotation>
      <Splat renderOrder={renderOrder} scale={0.85} src={'./splats/lasercutter_closed.splat'} />
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          // onClick={onMachineClick}
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
      </RigidBody>
    </>
  );
});
