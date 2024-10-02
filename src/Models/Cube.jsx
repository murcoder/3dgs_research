import { Html, Outlines, TransformControls } from '@react-three/drei';
import React, { useRef, useState } from 'react';
import { useControls } from 'leva';
import { CuboidCollider, Physics, RigidBody } from '@react-three/rapier';

export function Cube() {
  const cube = useRef()
  const [hovered, setHovered] = useState(false);
  const { scale, position, color, visible, physics } = useControls('cube', {
    physics: false,
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

  const handlePointerOver = () => {
    setHovered(true);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };


  return <>
    {/*<TransformControls object={cube} />*/}
    {physics ? (
        <RigidBody colliders="cuboid">
          <mesh castShadow
                ref={cube}
                visible={visible}
                position={[2, position.y, position.z]}
                scale={scale}
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}>>
            <boxGeometry />
            <meshStandardMaterial color={color} />
            <Html position={[1, 1, 0]} wrapperClass="label" center distanceFactor={8}>
              Cube
            </Html>
          </mesh>
        </RigidBody>
    ) : (
      <mesh
            castShadow
            ref={cube}
            visible={visible}
            position={[2, position.y, position.z]}
            scale={scale}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}>
        <boxGeometry />
        {hovered && (
          <Outlines color="#f37575" thickness={5} />
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
                <p className="text-center">This is a Cube</p>
                <p className="text-xs text-center">Hovering over me!</p>
                <div
                  className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-t-gray-800"></div>
              </div>
            </div>
          </Html>
        )}
        <meshStandardMaterial color={color} />
        <Html position={[1, 1, 0]} wrapperClass="label" center distanceFactor={8}>
          Cube
        </Html>
      </mesh>
    )}
  </>;
}
