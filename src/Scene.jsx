import { CameraControls, Float, KeyboardControls, OrbitControls, useKeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import { Garage } from './Garage.jsx';
import { Cube } from './Models/Cube.jsx';
import { Sphere } from './Models/Sphere.jsx';
import { Perf } from 'r3f-perf';
import { SplatObject } from './Models/SplatObject.jsx';
import { Floor } from './Models/Floor.jsx';
import Player from './Models/Player.jsx';
import { useEffect, useState } from 'react';

export default function Scene() {
  const { monitoring, show3DScan, debugPhysics } = useControls('world', {
    monitoring: false,
    show3DScan: true,
    debugPhysics: true
  });

  const [pausedPhysics, setPausedPhysics] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPausedPhysics(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      {/*<OrbitControls enableZoom={false} enableDamping={false} makeDefault/>*/}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Physics debug={debugPhysics} colliders="hull" timeStep="vary" paused={pausedPhysics}>
        {show3DScan && <Garage />}
        <Player />
        <Cube />
        <Floor />
        {/*<Sphere />*/}
        {/*<SplatObject/>*/}
      </Physics>
    </>
  );
}
