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
            disableControl={disableControl}
            disableFollowCam={disableFollowCam}
            position={[1, 0, 3]}
            camInitDis={-1}
            moveImpulsePointY={3}
            camFollowMult={10}
          >
          </Ecctrl>
        </KeyboardControls>
    </>
  );
}
