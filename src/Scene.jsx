import { CameraControls, Float, KeyboardControls, OrbitControls, Splat } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import { useControls } from 'leva';
import { Garage } from './Garage.jsx';
import { Cube } from './Models/Cube.jsx';
import { Sphere } from './Sphere.jsx';
import { Perf } from 'r3f-perf';
import { SplatObject } from './SplatObject.jsx';
import { Floor } from './Models/Floor.jsx';

export default function Scene() {
  const { monitoring } = useControls({
    monitoring: false
  });
  const cakewalk = 'https://huggingface.co/cakewalk/splat-data/resolve/main'

  return (
    <>
      {monitoring && <Perf position="top-left" />}
      <Garage />
      <OrbitControls enableZoom={false} enableDamping={false} makeDefault/>
      {/*<CameraControls makeDefault />*/}
      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      <Physics debug colliders="hull">
        <Cube />
        <Floor />
        <Sphere />
        <SplatObject/>
      </Physics>
      {/*<Splat alphaTest={0.1} src={`${cakewalk}/nike.splat`} scale={0.5} position={[0, 1.6, 2]} />*/}
    </>
  );
}
