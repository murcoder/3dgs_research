import { forwardRef, useRef } from 'react';
import { Splat } from '@react-three/drei';
import { useTranslation } from 'react-i18next';
import { RigidBody } from '@react-three/rapier';
import { transparentMaterial } from '../constants/materials.js';
import { MachineDetailsTable } from '../html/MachineDetailsTable.jsx';
import { Annotation } from '../html/Annotation.jsx';
import { LaserButtonsDetails } from '../html/LaserButtonsDetails.jsx';
import useStore from '../stores/useStore.jsx';

export const LasercutClosed = forwardRef(({ openClick, renderOrder, toneMapping, alphaTest }, ref) => {
  const { t } = useTranslation();
  const meshRef = useRef();

  // Access global store for tasks
  const { lasercutTasks, setLasercutTasks } = useStore((state) => ({
    lasercutTasks: state.lasercutTasks,
    setLasercutTasks: state.setLasercutTasks,
  }));

  const handleLensHover = () => {
    // DONE - Task 1 (check out the controls)
    if (!lasercutTasks[0].completed) {
      const updatedTasks = lasercutTasks.map((task, index) =>
        index === 0 ? { ...task, completed: true } : task
      );
      setLasercutTasks(updatedTasks);
    }
  };

  return (
    <>
      <Annotation
        iconPath={'./icons/info_icon.svg'}
        cursorStyle={'cursor-help'}
        renderOrder={3}
        position={[1, 2, 0]}>
        <MachineDetailsTable />
      </Annotation>
      <Annotation
        onClick={openClick}
        iconPath={'./icons/open_icon.svg'}
        cursorStyle={'cursor-pointer'}
        renderOrder={3}
        position={[-0.4, 1.8, -0.3]}>
        <div className="bg-black/80 w-52 p-2 text-center text-sm rounded-lg text-white transition pointer-events-none">
          <p>{t('laser.open')}</p>
        </div>
      </Annotation>
      <Annotation
        iconPath={'./icons/image_icon.svg'}
        cursorStyle={'cursor-help'}
        renderOrder={3}
        onHover={handleLensHover}
        position={[-1.2, 1.8, -0.3]}>
        <div className="bg-black/80 w-80 p-2 text-center text-sm rounded-lg text-white transition h-96 overflow-hidden">
          <p className="pointer-events-none"> {t('laser.buttons')}</p>
          <img
            className="pointer-events-none"
            src="./assets/laser_buttons.png"
            alt="laser_buttons"
          />
          <LaserButtonsDetails />
        </div>
      </Annotation>
      <Splat
        renderOrder={renderOrder}
        scale={0.85}
        src={'./splats/lasercutter_closed.splat'}
        toneMapped={toneMapping}
        alphaTest={alphaTest}
      />
      <RigidBody type="fixed">
        <mesh
          renderOrder={renderOrder + 1}
          ref={ref || meshRef}
          name="lasercutter_closed"
          position={[0, 0.9, -0.2]}
          material={transparentMaterial}>
          <boxGeometry args={[2.9, 2.04, 1.44]} />
        </mesh>
      </RigidBody>
    </>
  );
});
LasercutClosed.displayName = 'LasercutClosed'