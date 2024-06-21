import { Html, PivotControls } from '@react-three/drei';
import React, { useRef } from 'react';
import { useControls } from 'leva';

export function Sphere() {
  const sphere = useRef()
  const { scale, position, color, visible } = useControls('sphere', {
    position:
      {
        value: { y: 1, z: -2 },
        step: 0.01,
        joystick: 'invertY'
      },
    color: '#f37575',
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
    <PivotControls
      anchor={[0, 0, 0]}
      depthTest={false}
      lineWidth={4}
      rotation={[0,5,0]}
      axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
      scale={150}
      fixed={true}
    >
      <mesh ref={sphere} visible={ visible } position={[1, position.y, position.z]} scale={scale}>
        <sphereGeometry/>
        <meshStandardMaterial color={color} />
        <Html
          position={[1, 1, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
        >
          Sphere
        </Html>
      </mesh>
    </PivotControls>
  </>;
}
