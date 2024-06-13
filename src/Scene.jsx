import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { Garage } from './Garage.jsx';
import { Cube } from './Cube.jsx';
import { Sphere } from './Sphere.jsx';

export default function Scene() {
  const { monitoring } = useControls({
    monitoring: false
  });

  return (
    <>
      <Garage />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Cube />
      <Sphere />
    </>
  );
}
