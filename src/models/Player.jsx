import { KeyboardControls } from '@react-three/drei';
import Ecctrl from 'ecctrl';

export default function Player({ position, cameraPos, mode = 'CameraBasedMovement', renderOrder, autoBalance }) {
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
          renderOrder={renderOrder}
          canJump={false}
          capsuleHalfHeight={0.6}
          floatHeight={0.6}
          position={position}
          camInitDir={cameraPos} // Camera initial rotation direction (in radians)
          camCollision={false} // disable camera collision detect (useless in FP mode)
          camInitDis={-0.01} // camera intial position
          camMinDis={-0.01} // camera zoom in the closest position
          camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly
          camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly
          turnVelMultiplier={1} // Turning speed same as moving speed
          dampingC={0.1}
          dragDampingC={0.5}
          autoBalance={autoBalance}
          maxVelLimit={2.5}
          camZoomSpeed={0}
          jumpVel={0} // disable jump
          jumpForceToGroundMult={0}
          slopJumpMult={0}
          floatingDis={1.5} // Set higher view-point
          turnSpeed={100} // give it big turning speed to prevent turning wait time
          mode={mode} // Activate different ecctrl modes ("CameraBasedMovement" | "FixedCamera" | "PointToMove")
        />
      </KeyboardControls>
    </>
  );
}
