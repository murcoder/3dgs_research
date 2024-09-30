import {KeyboardControls} from '@react-three/drei';
import Ecctrl, { EcctrlAnimation } from "ecctrl";

export default function Player () {

  const keyboardMap = [
    { name: "forward", keys: ["ArrowUp", "KeyW"] },
    { name: "backward", keys: ["ArrowDown", "KeyS"] },
    { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
    { name: "rightward", keys: ["ArrowRight", "KeyD"] },
    { name: "jump", keys: ["Space"] },
    { name: "run", keys: ["Shift"] },
    // Optional animation key map
    { name: "action1", keys: ["1"] },
    { name: "action2", keys: ["2"] },
    { name: "action3", keys: ["3"] },
    { name: "action4", keys: ["KeyF"] },
  ];

  return (
    <>
        <KeyboardControls map={keyboardMap}>
          <Ecctrl
            debug
            moveImpulsePointY={3}
            camFollowMult={10}
          >
          </Ecctrl>
        </KeyboardControls>
    </>
  );
}
