import { Capsule, KeyboardControls, PerspectiveCamera } from '@react-three/drei';
import Ecctrl from 'ecctrl';
import { useEffect, useRef, useState } from 'react';
import { Euler, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { CapsuleCollider, CuboidCollider, RapierRigidBody, RigidBody } from '@react-three/rapier';


export default function Player({ position, cameraPos, mode = 'CameraBasedMovement', renderOrder }) {
  const cameraRef = useRef();
  const body = useRef();
  const collider = useRef();
  const velocity = useRef(new Vector3(0, 0, 0));
  const speed = 5; // Movement speed
  const runMultiplier = 2; // Multiplier when "run" key is pressed
  const mouseSensitivity = 0.002; // Sensitivity for mouse look

  const [isRunning, setIsRunning] = useState(false); // Track "run" state
  const [keysPressed, setKeysPressed] = useState({
    forward: false,
    backward: false,
    leftward: false,
    rightward: false,
    jump: false,
  });

  // Mouse state for camera rotation
  const [cameraRotation, setCameraRotation] = useState({ x: cameraPos.x, y: cameraPos.y });

  // Handle keyboard input
  const handleKeyDown = (e) => {
    //console.log('keyDown', e)
    if (e.code === 'ShiftLeft') setIsRunning(true);
    setKeysPressed((keys) => ({
      ...keys,
      forward: e.code === 'ArrowUp' || e.code === 'KeyW' || keys.forward,
      backward: e.code === 'ArrowDown' || e.code === 'KeyS' || keys.backward,
      leftward: e.code === 'ArrowLeft' || e.code === 'KeyA' || keys.leftward,
      rightward: e.code === 'ArrowRight' || e.code === 'KeyD' || keys.rightward,
      jump: e.code === 'Space' || keys.jump,
    }));
  };

  const handleKeyUp = (e) => {
    //console.log('keyUp', e)
    if (e.code === 'ShiftLeft') setIsRunning(false);
    setKeysPressed((keys) => ({
      ...keys,
      forward: !(e.code === 'ArrowUp' || e.code === 'KeyW') && keys.forward,
      backward: !(e.code === 'ArrowDown' || e.code === 'KeyS') && keys.backward,
      leftward: !(e.code === 'ArrowLeft' || e.code === 'KeyA') && keys.leftward,
      rightward: !(e.code === 'ArrowRight' || e.code === 'KeyD') && keys.rightward,
      jump: !(e.code === 'Space') && keys.jump,
    }));
  };


  const keyboardMap = [
    { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
    { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
    { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
    { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
    { name: 'jump', keys: ['Space'] },
    { name: 'run', keys: ['Shift'] }
  ];

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const handleMouseMove = (e) => {
      setCameraRotation((rotation) => ({
        x: Math.max(Math.min(rotation.x - e.movementY * mouseSensitivity, Math.PI / 2), -Math.PI / 2),
        y: rotation.y - e.movementX * mouseSensitivity,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Movement logic
  useFrame((_, delta) => {
    if (!body.current) return;

    const impulse = new Vector3();
    const rotation = new Euler(0, cameraRotation.y, 0, 'YXZ');
    const forward = new Vector3(0, 0, -1).applyEuler(rotation);
    const right = new Vector3(1, 0, 0).applyEuler(rotation);

    if (keysPressed.forward) impulse.add(forward);
    if (keysPressed.backward) impulse.sub(forward);
    if (keysPressed.leftward) impulse.sub(right);
    if (keysPressed.rightward) impulse.add(right);

    impulse.normalize().multiplyScalar(speed * (isRunning ? runMultiplier : 1));

    // Apply movement to RigidBody
    body.current.setLinvel(impulse, true);

    // Sync camera position with RigidBody
    const bodyPosition = body.current.translation();
    cameraRef.current.position.set(bodyPosition.x, bodyPosition.y + 1.5, bodyPosition.z);
    cameraRef.current.rotation.x = cameraRotation.x;
    cameraRef.current.rotation.y = cameraRotation.y;
  });

  return (
    <>
      <KeyboardControls map={keyboardMap}>
        <PerspectiveCamera
          ref={cameraRef}
          position={position}
          makeDefault
        />
        <RigidBody
          colliders={false} // Custom collider
          ref={body}
          position={position}
          friction={0.5}
          restitution={0}
        >
          <Capsule args={[0.5, 2]} />
          <CapsuleCollider args={position} ref={collider} />
        </RigidBody>
        {/*<Ecctrl*/}
        {/*  renderOrder={renderOrder}*/}
        {/*  canJump={false}*/}
        {/*  capsuleHalfHeight={0.6}*/}
        {/*  floatHeight={0.6}*/}
        {/*  position={position}*/}
        {/*  camInitDir={cameraPos} // Camera initial rotation direction (in radians)*/}
        {/*  camCollision={false} // disable camera collision detect (useless in FP mode)*/}
        {/*  camInitDis={-0.01} // camera intial position*/}
        {/*  camMinDis={-0.01} // camera zoom in the closest position*/}
        {/*  camFollowMult={1000} // give a big number here, so the camera follows the target (character) instantly*/}
        {/*  camLerpMult={1000} // give a big number here, so the camera lerp to the followCam position instantly*/}
        {/*  turnVelMultiplier={1} // Turning speed same as moving speed*/}
        {/*  dampingC={0.1}*/}
        {/*  autoBalance={false}*/}
        {/*  maxVelLimit={2.5}*/}
        {/*  camZoomSpeed={0}*/}
        {/*  jumpVel={0} // disable jump*/}
        {/*  floatingDis={1.5} // Set higher view-point*/}
        {/*  turnSpeed={100} // give it big turning speed to prevent turning wait time*/}
        {/*  mode={mode} // Activate different ecctrl modes ("CameraBasedMovement" | "FixedCamera" | "PointToMove")*/}
        {/*/>*/}
      </KeyboardControls>
    </>
  );
}
