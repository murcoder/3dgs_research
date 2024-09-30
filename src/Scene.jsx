import { CameraControls, Float, KeyboardControls, OrbitControls, useKeyboardControls } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import { Garage } from './Garage.jsx';
import { Cube } from './Models/Cube.jsx';
import { Sphere } from './Sphere.jsx';
import { Perf } from 'r3f-perf';
import { SplatObject } from './SplatObject.jsx';
import { Floor } from './Models/Floor.jsx';
import Player from './Models/Player.jsx';

export default function Scene() {
  const { monitoring, show3DScan } = useControls({
    monitoring: false,
    show3DScan: false
  });

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      {/*<OrbitControls enableZoom={false} enableDamping={false} makeDefault/>*/}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Physics debug colliders="hull" timeStep="vary">
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
