import { PerspectiveCamera } from '@react-three/drei';
import { useEffect, useRef, useState } from 'react';
import { Euler, Quaternion, Vector3 } from 'three';
import { useThree, useFrame } from '@react-three/fiber';
import { CapsuleCollider, RigidBody } from '@react-three/rapier';

export default function Player({ position, cameraPos, renderOrder }) {
  const cameraRef = useRef();
  const { camera } = useThree(); // Get the global camera from useThree()
  const body = useRef();
  const speed = 3;
  const runMultiplier = 2;
  const mouseSensitivity = 0.002;
  const pitch = useRef(cameraPos.y); // Track pitch (up/down rotation)
  const yaw = useRef(cameraPos.x); // Track yaw (left/right rotation)

  const [isRunning, setIsRunning] = useState(false);
  const [isMousePressed, setIsMousePressed] = useState(false);
  const [keysPressed, setKeysPressed] = useState({
    forward: false,
    backward: false,
    leftward: false,
    rightward: false,
    jump: false
  });

  const handleKeyDown = (e) => {
    if (e.code === 'ShiftLeft') setIsRunning(true);
    setKeysPressed((keys) => ({
      ...keys,
      forward: e.code === 'ArrowUp' || e.code === 'KeyW' || keys.forward,
      backward: e.code === 'ArrowDown' || e.code === 'KeyS' || keys.backward,
      leftward: e.code === 'ArrowLeft' || e.code === 'KeyA' || keys.leftward,
      rightward: e.code === 'ArrowRight' || e.code === 'KeyD' || keys.rightward,
      jump: e.code === 'Space' || keys.jump
    }));
  };

  const handleKeyUp = (e) => {
    if (e.code === 'ShiftLeft') setIsRunning(false);
    setKeysPressed((keys) => ({
      ...keys,
      forward: !(e.code === 'ArrowUp' || e.code === 'KeyW') && keys.forward,
      backward: !(e.code === 'ArrowDown' || e.code === 'KeyS') && keys.backward,
      leftward: !(e.code === 'ArrowLeft' || e.code === 'KeyA') && keys.leftward,
      rightward: !(e.code === 'ArrowRight' || e.code === 'KeyD') && keys.rightward,
      jump: !(e.code === 'Space') && keys.jump
    }));
  };
  const handleMouseDown = () => {
    setIsMousePressed(true);
  };

  const handleMouseUp = () => {
    setIsMousePressed(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    const handleMouseMove = (e) => {
      if (isMousePressed) {
        yaw.current -= e.movementX * mouseSensitivity;
        pitch.current = Math.max(
          Math.min(pitch.current - e.movementY * mouseSensitivity, Math.PI / 2),
          -Math.PI / 2
        );
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMousePressed]);

  // Movement logic
  useFrame((_, delta) => {
    if (!body.current || !cameraRef.current) return;

    // Use global camera properties
    const { fov, near, far } = camera;
    camera.fov = fov;
    camera.near = near;
    camera.far = far;
    camera.updateProjectionMatrix();

    const impulse = new Vector3();
    const rotation = new Euler(0, yaw.current, 0, 'YXZ');
    const forward = new Vector3(0, 0, -1).applyEuler(rotation);
    const right = new Vector3(1, 0, 0).applyEuler(rotation);

    if (keysPressed.forward) impulse.add(forward);
    if (keysPressed.backward) impulse.sub(forward);
    if (keysPressed.leftward) impulse.sub(right);
    if (keysPressed.rightward) impulse.add(right);

    impulse.normalize().multiplyScalar(speed * (isRunning ? runMultiplier : 1));

    // Apply movement to RigidBody (linear velocity)
    body.current.setLinvel(impulse, true);

    // Update camera rotation
    const quaternion = new Quaternion();
    quaternion.setFromEuler(new Euler(pitch.current, yaw.current, 0, 'YXZ'));
    cameraRef.current.quaternion.copy(quaternion);

    // Sync camera position with RigidBody
    const bodyPosition = body.current.translation();
    cameraRef.current.position.set(bodyPosition.x, bodyPosition.y + 1.5, bodyPosition.z);
  });

  return (
    <>
      <group>
        <PerspectiveCamera
          ref={cameraRef}
          position={position}
          makeDefault
          fov={camera.fov}
          near={camera.near}
          far={camera.far}
          gravityScale={0}
        />
        <RigidBody
          renderOrder={renderOrder}
          colliders={false}
          ref={body}
          position={position}
          friction={0.3}
          restitution={0}
          lockRotations={true}
          type="dynamic"
        >
          <CapsuleCollider args={[0.6, 0.8]} />
        </RigidBody>
      </group>
    </>
  );
}
