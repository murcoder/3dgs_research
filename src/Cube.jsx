import { Html, TransformControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { useControls } from 'leva';

export function Cube() {
  const cube = useRef()

  const { scale, position, color, visible } = useControls('cube', {
    position:
      {
        value: { y: 1, z: 0 },
        step: 0.01,
        joystick: 'invertY'
      },
    color: '#a7fa68',
    visible: true,
    scale:
      {
        value: 0.5,
        step: 0.01,
        min: 0,
        max: 5
      }
  })

  return <>
    <TransformControls object={cube} />
    <mesh ref={cube} visible={visible} position={[2, position.y, position.z]} scale={ scale }>
      <boxGeometry />
      <meshStandardMaterial color={color} />
      <Html
        position={[1, 1, 0]}
        wrapperClass="label"
        center
        distanceFactor={8}
      >
        Cube
      </Html>
    </mesh>
  </>;
}