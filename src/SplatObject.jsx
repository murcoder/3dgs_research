import React, { useRef } from 'react';
import { Float, Html, PivotControls, Splat, TransformControls } from '@react-three/drei';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';

export function SplatObject() {
  const splat = useRef()

  const { scale, position } = useControls('splat', {
    physics: false,
    position:
      {
        value: { y: 1, z: 0 },
        step: 0.01,
        joystick: ''
      },
    scale:
      {
        value: 0.3,
        step: 0.01,
        min: 0,
        max: 2
      },
  })
  return (
    <>
      <PivotControls
        anchor={[0, -1.2, 0]}
        disableScaling={true}
        depthTest={false}
        rotation={[0,4,0]}
        lineWidth={4}
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
        scale={100}
        fixed={true}
      >
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
        >
          Splat
        </Html>
        <Splat
          ref={splat}
          scale={scale}
          position={[2, position.y, position.z]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
        />
      </PivotControls>
    </>
  );
}
