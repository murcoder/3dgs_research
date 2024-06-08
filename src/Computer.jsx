import { Float, Html, Outlines, PresentationControls, Text, useGLTF } from '@react-three/drei';
import { Selection, EffectComposer, Outline, Select } from '@react-three/postprocessing';
import { useEffect, useRef, useState } from 'react';
import { useControls } from 'leva';

export function Computer() {
  const [isHovered, setIsHovered] = useState(false);
  const [turnedOn, setIsTurnedOn] = useState(false);
  const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf');
  console.log('computer',computer)
  const { nodes, materials, animations } = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')
  const { lightColor, cameraRotation } = useControls('Laptop', {
    lightColor: '#ff9615',
    cameraRotation: [0.13, 0.1, 0]
  });

  useEffect(() => {
    document.body.style.cursor = isHovered ? 'pointer' : 'auto';
    //console.log('isHovered', isHovered, document.body.style.cursor);
    return () => (document.body.style.cursor = 'auto');
  }, [isHovered]);

  return (
    <>
      <PresentationControls
        global
        rotation={cameraRotation}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 300 }}
        snap={{ mass: 4, tension: 300 }}>
        <Float floatIntensity={0.4} rotationIntensity={0.2}>
          {/* Light */}
          {turnedOn ? (
              <rectAreaLight
                  width={2.5}
                  height={1.65}
                  intensity={65}
                  color={lightColor}
                  rotation={[0.1, Math.PI, 0]}
                  position={[0, 0.55, -1.15]}
              />
          ) : null}

          {/* Computer */}
          <primitive
              object={computer.scene}
              position-y={-1.2}
              onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
              onPointerLeave={() => setIsHovered(false)}
              onPointerUp={() => setIsTurnedOn(!turnedOn)}>
            <Outlines thickness={20} color="orange"/>
            {/* Website */}
            {turnedOn ? (
                <Html
                    transform
                    wrapperClass="htmlScreen"
                    distanceFactor={1.17}
                    position={[0, 1.56, -1.4]}
                    rotation-x={-0.256}>
                  <iframe src="https://christophmurauer.com/"></iframe>
                </Html>
            ) : null}
          </primitive>
          {!turnedOn ? (
              <Text
                  font="./fonts/lilita-one-v15-latin-regular.woff"
                  fontSize={0.5}
                  position={[2, 0.75, 0.75]}
                  rotation-y={-1.25}
                  maxWidth={2}
                  textAlign={'center'}>
                CLICK ME
              </Text>
          ) : null}
          {turnedOn ? (
              <Text
                  font="./fonts/lilita-one-v15-latin-regular.woff"
                  fontSize={0.5}
                  position={[2, 0.75, 0.75]}
                  rotation-y={-1.25}
                  maxWidth={2}
                  textAlign={'center'}>
                CHRISTOPH MURAUER
              </Text>
          ) : null}
        </Float>
      </PresentationControls>
    </>
  );
}
