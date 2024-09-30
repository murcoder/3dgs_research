import  React, { useRef } from 'react';
import { Splat } from '@react-three/drei';
import { useControls } from 'leva';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

export function SplatObject() {
  const splat = useRef()

  const { scale, position, physics } = useControls('splat', {
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
      {physics ? (
        <RigidBody colliders={false}>
        <Splat
          ref={splat}
          scale={scale}
          position={[2, position.y, position.z]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
        />
          <CuboidCollider args={[0.4, 0.3, 0.5]} position={[2, position.y-0.5, position.z]} />
        </RigidBody>
      ) : (
        <Splat
          ref={splat}
          scale={scale}
          position={[2, position.y, position.z]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
        />
      )}
    </>
  );
}
