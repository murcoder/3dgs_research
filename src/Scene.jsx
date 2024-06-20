import { OrbitControls } from '@react-three/drei';
import {Physics} from '@react-three/rapier';
import { useControls } from 'leva';
import { Garage } from './Garage.jsx';
import { Cube } from './Cube.jsx';
import { Sphere } from './Sphere.jsx';
import { Perf } from 'r3f-perf';

export default function Scene() {
  const { monitoring } = useControls({
    monitoring: false
  });

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      <Garage />
      <OrbitControls enableZoom={false} enablePan={false} enableDamping={false} makeDefault/>
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Cube />
      <Sphere />
    </>
  );
}
