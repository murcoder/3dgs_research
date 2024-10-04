import  React from 'react';
import { Splat } from '@react-three/drei';
import { useControls } from 'leva';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

export function SplatObject() {
  const { scale, position, physics } = useControls('splat', {
    physics: false,
    position:
      {
        value: { x: 3.5, y: 3, z: 2.4 },
        step: 0.01,
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
          scale={scale}
          position={[position.x, position.y, position.z]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
        />
          <CuboidCollider args={[0.5, 0.2, 0.2]} position={[3.5, 2.4, 2]} />
        </RigidBody>
      ) : (
        <Splat
          scale={scale}
          position={[position.x, position.y, position.z]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
        />
      )}
    </>
  );
}
