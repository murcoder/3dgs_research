import { Environment, Grid, OrbitControls, PivotControls, Splat } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import React from 'react';

// Extend LumaSplatsThree to make it available in react-three-fiber
extend({ LumaSplatsThree });

export function Garage() {

  let splats = new LumaSplatsThree({
    source: 'https://lumalabs.ai/capture/def76f0d-a3f1-43d2-a7c0-7eb9d449bfc3',
    // controls the particle entrance animation
    particleRevealEnabled: true,
  });

  return <>
    <lumaSplatsThree
      source='https://lumalabs.ai/capture/def76f0d-a3f1-43d2-a7c0-7eb9d449bfc3'
      position={[-0.5, 1, 0]}
      scale={1}
      antialias={false}
      particleRevealEnabled={false}
      enableThreeShaderIntegration={false}
    />
    {/*<PivotControls*/}
    {/*  anchor={[0, 0, 0]}*/}
    {/*  depthTest={false}*/}
    {/*  lineWidth={4}*/}
    {/*  axisColors={['#9381ff', '#ff4d6d', '#7ae582']}*/}
    {/*  scale={200}*/}
    {/*  fixed={true}*/}
    {/*>*/}
    {/*  <lumaSplatsThree*/}
    {/*    semanticsMask={LumaSplatsSemantics.FOREGROUND}*/}
    {/*    source='https://lumalabs.ai/capture/a175fcc9-a438-4fb5-9081-3f5f7e6d7beb'*/}
    {/*    position={[1, 0, 0]}*/}
    {/*    scale={0.5}*/}
    {/*    rotation={[0, Math.PI, 0]}*/}
    {/*  />*/}
    {/*</PivotControls>*/}
  </>;
}
