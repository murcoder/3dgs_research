import React, { forwardRef, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Html, Splat } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { Annotation } from '../html/Annotation.jsx';

export const LasercutOpened = forwardRef(({ closeClick, renderOrder }, ref) => {
  const meshRef = useRef();
  const { t } = useTranslation();

  return (
    <>
      <Splat
        renderOrder={renderOrder}
        position={[-0.16, -0.04, -0.05]}
        src={'./splats/lasercutter_opened.splat'}
      />
      <Annotation
        onClick={closeClick}
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
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          name="lasercutter_closed"
          position={[-0.1, 1.2, -0.2]}
          material={transparentMaterial}>
          <boxGeometry args={[2.8, 2.5, 1.44]} />
        </mesh>
      </RigidBody>
    </>
  );
});
