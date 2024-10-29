import React, { forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Html, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Label } from '../html/Label.jsx';
import { transparentMaterial } from '../constants/materials.js';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { calculateTooltipPosition } from '../helper.js';
import { Annotation } from '../html/Annotation.jsx';
import { LaserButtonsDetails } from '../html/LaserButtonsDetails.jsx';

export const LasercutOpened = forwardRef(({ onMachineClick, renderOrder }, ref) => {
  const meshRef = useRef();
  const { t } = useTranslation();
  const { camera, pointer } = useThree();
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
      <Splat
        renderOrder={renderOrder}
        position={[-0.16, -0.04, -0.05]}
        src={'./splats/lasercutter_opened.splat'}
      />
      <Annotation
        onClick={onMachineClick}
        iconPath={'./icons/open_icon.svg'}
        iconStyle={'rotate-180'}
        cursorStyle={'cursor-pointer'}
        renderOrder={3}
        position={[-0.5, 2.4, 0.3]}>
        <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">
          <p>{t('laser.close')}</p>
        </div>
      </Annotation>
      <Annotation
        iconPath={'./icons/image_icon.svg'}
        cursorStyle={'cursor-help'}
        renderOrder={3}
        position={[-0.5, 1.7, 0]}>
        <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">
          <p>{t('laser.lens')}</p>
          <img src="./assets/laser_100_lens.png" alt="laser_100_lens" />
        </div>
      </Annotation>
      <Annotation
        iconPath={'./icons/image_icon.svg'}
        cursorStyle={'cursor-help'}
        renderOrder={3}
        position={[-1.2, 1.8, -0.3]}>
        <div className="bg-black/80 w-80 p-2 text-center text-sm rounded-lg text-white transition h-96 overflow-hidden">
          <p>{t('laser.buttons')}</p>
          <img src="./assets/laser_buttons.png" alt="laser_buttons" />
          <LaserButtonsDetails/>
        </div>
      </Annotation>
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
        {/*{hovered && (*/}
        {/*  <Html*/}
        {/*    center*/}
        {/*    position={tooltipPosition.toArray()}*/}
        {/*    distanceFactor={8}*/}
        {/*    style={{ pointerEvents: 'none' }}>*/}
        {/*    <Label title={'Lasercutter'} content={'Click to close'} />*/}
        {/*  </Html>*/}
        {/*)}*/}
      </RigidBody>
    </>
  );
});
