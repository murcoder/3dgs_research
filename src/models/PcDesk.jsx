import React, { forwardRef, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Html, PivotControls, Splat, TransformControls } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Annotation } from '../html/Annotation.jsx';
import { useControls } from 'leva';

export const PcDesk = forwardRef(({ closeClick, renderOrder }, ref) => {
  const meshRef = useRef();
  const splatRef = useRef();
  const { t } = useTranslation();
  const [setHovered] = useState(false);
  const position = [4, 0, -3];

  const { pivotControls } = useControls('scene', {
    pivotControls: false
  });

  return (
    <>
      {pivotControls && (
        <PivotControls anchor={[0, 0, 0.5]} object={splatRef}>
          <Splat
            ref={splatRef}
            renderOrder={renderOrder}
            scale={0.8}
            position={position}
            rotation={[0, Math.PI / 2, 0]}
            src={'./splats/pc_desk.splat'}
          />
        </PivotControls>
      )}
      {!pivotControls && (
        <Splat
          ref={splatRef}
          renderOrder={renderOrder}
          scale={0.8}
          position={position}
          rotation={[0, Math.PI / 2, 0]}
          src={'./splats/pc_desk.splat'}
        />
      )}
      {/*<Annotation*/}
      {/*  onClick={closeClick}*/}
      {/*  iconPath={'./icons/open_icon.svg'}*/}
      {/*  iconStyle={'rotate-180'}*/}
      {/*  cursorStyle={'cursor-pointer'}*/}
      {/*  renderOrder={3}*/}
      {/*  position={[-0.5, 2.4, 0.3]}>*/}
      {/*  <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">*/}
      {/*    <p>{t('laser.close')}</p>*/}
      {/*  </div>*/}
      {/*</Annotation>*/}
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          onPointerEnter={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerLeave={() => {
            setHovered(false);
          }}
          name="pc_desk"
          position={[0, 0.9, -0.2]}
          material={transparentMaterial}>
          <boxGeometry args={[2.6, 2.04, 1.44]} />
        </mesh>
      </RigidBody>
    </>
  );
});
