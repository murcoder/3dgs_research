import { KeyboardControls } from '@react-three/drei';
import Ecctrl, { EcctrlAnimation } from 'ecctrl';
import { useControls } from 'leva';

export default function Player({position, cameraPos}) {
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
          position={position}
          camInitDir={cameraPos} // set look-at initial position
          camCollision={false} // disable camera collision detect (useless in FP mode)
          camInitDis={-0.01} // camera intial position
          camMinDis={-0.01} // camera zoom in closest position
          camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
          camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
          turnVelMultiplier={1} // Turning speed same as moving speed
          dampingC={0.1}
          autoBalance={false}
          maxVelLimit={2.5}
          jumpVel={0} // disable jump
          floatingDis={1.5} // Set higher view-point
          turnSpeed={100} // give it big turning speed to prevent turning wait time
          mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
        />
      </KeyboardControls>
    </>
  );
}
