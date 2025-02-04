import { Html, Outlines } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useControls } from 'leva';
import { Label } from '../html/Label.jsx';
import { RigidBody } from '@react-three/rapier';

export function Sphere({renderOrder}) {
  const sphere = useRef();
  const [hovered, setHovered] = useState(false);
  const { scale, position } = useControls('sphere', {
    position: {
      value: { x: 3, y: 2.4, z: 3.3 }
    },
    scale: {
      value: 0.3,
      step: 0.01,
      min: 0,
      max: 5
    }
  });

  const handlePointerOver = () => {
    setTimeout(() => {
      setHovered(true);
    }, 100);
  };

  const handlePointerOut = () => {
    setHovered(false);
  };

  return (
    <>
      <RigidBody colliders="ball">
        <mesh
          renderOrder={renderOrder}
          castShadow
          ref={sphere}
          position={[position.x, position.y, position.z]}
          scale={scale}
          onClick={(event) => {
            event.stopPropagation();
          }}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}>
          <sphereGeometry />
          <meshStandardMaterial color={'#f37575'} transparent={true} />
          {hovered && <Outlines color="white" thickness={5} />}
          {hovered && (
            <Html position={[0.5, 0.5, 0]} center distanceFactor={8} style={{ pointerEvents: 'none' }}>
              <Label title={'This is a Sphere'} content={'Hovering over me!'} />
            </Html>
          )}
        </mesh>
      </RigidBody>
    </>
  );
}