import React from 'react';
import { Splat } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';

export function SplatObject2() {
  return (
    <>
      <RigidBody colliders={false} mass={10}>
        <Splat
          position={[0.8, 2.9, -0.36]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
          scale={0.3}
        />
        <CuboidCollider args={[0.5, 0.2, 0.2]} position={[3.5, 2.4, 2]} restitution={0.1}/>
      </RigidBody>
    </>
  );
}
