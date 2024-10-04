import { extend } from '@react-three/fiber';
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import React from 'react';

// Extend LumaSplatsThree to make it available in react-three-fiber
extend({ LumaSplatsThree });

export function Garage() {

  // let splats = new LumaSplatsThree({
  //   source: 'https://lumalabs.ai/capture/def76f0d-a3f1-43d2-a7c0-7eb9d449bfc3',
  //   // controls the particle entrance animation
  //   particleRevealEnabled: true,
  // });

  return <>
    <lumaSplatsThree
      source='https://lumalabs.ai/capture/def76f0d-a3f1-43d2-a7c0-7eb9d449bfc3'
      position={[-0.5, 2.25, 0]}
      scale={1}
      antialias={false}
      particleRevealEnabled={false}
      enableThreeShaderIntegration={false}
    />
  </>;
}
