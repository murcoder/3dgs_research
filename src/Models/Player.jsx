import {KeyboardControls} from '@react-three/drei';
import Ecctrl, { EcctrlAnimation } from "ecctrl";
import { useControls } from 'leva';

export default function Player () {
  const {positionX, positionZ,  physics, disableControl, disableFollowCam} = useControls('player', {
    // positionX: 1,
    // positionZ: 3,
    disableControl: false,
    disableFollowCam: false,
  })


  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
  ];

  return (
    <>
        <KeyboardControls map={keyboardMap}>
          <Ecctrl
            debug
            dampingC={0.1}
            floatingDis={1.5}
            autoBalance={false}
            animated
            jumpVel={0}
            camInitDis={-0.01}
            camMinDis={-0.01}
            camFollowMult={100}
            turnVelMultiplier={1}
            turnSpeed={10}
            camLerpMult={1000}
            mode={"CameraBasedMovement"}
            disableControl={disableControl}
            disableFollowCam={disableFollowCam}
          />
        </KeyboardControls>
    </>
  );
}
