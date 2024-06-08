import { Environment, ContactShadows } from '@react-three/drei';
import { useControls, button } from 'leva';
import { Perf } from 'r3f-perf';
import { Computer } from './Computer.jsx';
import { Selection, EffectComposer, Outline } from '@react-three/postprocessing';
import { DemoReactThreeFiber } from './DemoReactThreeFiber.jsx';

export default function Scene() {
  const { monitoring } = useControls({
    monitoring: false
  });
  const { backgroundColor } = useControls('Environment', {
    backgroundColor: '#483931'
  });

  return (
    <>
      {monitoring ? <Perf position="top-left" /> : null}
      {/*<Environment preset="sunset" />*/}
      <DemoReactThreeFiber></DemoReactThreeFiber>

      {/*<color args={[backgroundColor]} attach="background" />*/}

      {/*<GaussianScene></GaussianScene>*/}

      {/*<ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />*/}
    </>
  );
}
