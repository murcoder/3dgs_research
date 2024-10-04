import { KeyboardControls } from '@react-three/drei';
import Ecctrl, { EcctrlAnimation } from 'ecctrl';
import { useControls } from 'leva';

export default function Player() {
  const { debug } = useControls('player', {
    debug: false
  });
  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] }
  ];

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <Ecctrl
          debug={debug}
          dampingC={0.1}
          floatingDis={1.5}
          autoBalance={false}
          jumpVel={0}
          maxVelLimit={2.5}
          camInitDis={-0.01}
          camMinDis={-0.01}
          camFollowMult={100}
          turnVelMultiplier={1}
          turnSpeed={30}
          camLerpMult={1000}
          mode={'CameraBasedMovement'}
        />
      </KeyboardControls>
    </>
  );
}
