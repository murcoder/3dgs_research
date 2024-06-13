import { Environment, Grid, OrbitControls, PivotControls, Splat } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { LumaSplatsThree, LumaSplatsSemantics } from "@lumaai/luma-web";
import React from 'react';

// Extend LumaSplatsThree to make it available in react-three-fiber
extend({ LumaSplatsThree });

export function Garage() {
  const gridConfig = {
    gridSize: [10.5, 10.5],
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: '#6f6f6f',
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: '#c1c1c1',
    fadeDistance: 25,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true
  }

  return <>
    {/*<Grid position={[0, -1, 0]} args={[10.5, 10.5]} {...gridConfig} renderOrder={-1} />*/}
    <lumaSplatsThree
      source='https://lumalabs.ai/capture/def76f0d-a3f1-43d2-a7c0-7eb9d449bfc3'
      position={[-0.5, 1, 0]}
      particleRevealEnabled={true}
      enableThreeShaderIntegration={false}
    />
  </>;
}