import { Html, Outlines, PivotControls } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useControls } from 'leva';

export function Sphere() {
  const sphere = useRef()
  const [hovered, setHovered] = useState(false);
  const { scale, position, color, visible } = useControls('sphere', {
    position:
      {
        value: { x: 1, y: 0, z: -2 },
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

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

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
      <mesh
        ref={sphere}
        visible={ visible }
        position={[position.x, position.y, position.z]}
        scale={scale}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry/>
        <meshStandardMaterial color={color} />
        {hovered && (
          <Outlines color="white" thickness={5}/>
        )}
        {hovered && (
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
          >
            <div className="relative">
              <div
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-40 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-lg">
                <p className="text-center">This is a Sphere</p>
                <p className="text-xs text-center">Hovering over me!</p>
                <div
                  className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </Html>
        )}
      </mesh>
    </PivotControls>
  </>;
}
