import React, { forwardRef } from 'react';
import { Splat } from '@react-three/drei';
import { Lasercutter } from '../boundries/Lasercutter.jsx';
import { Door } from '../boundries/Door.jsx';

export const Garage = forwardRef(({onMachineClick, onDoorClick}, ref) => {

  return <>
    <Splat renderPriority={1} scale={1.3} src="./splats/garage.splat" />
    <Lasercutter renderPriority={2} position={{x:-0.6,y:0.9,z:1.7}} boxGeometry={{width:1.2,height:1.6,depth:2.7}} onMachineClick={onMachineClick} />
    <Door renderPriority={2} position={{x:4.2, y:1.54, z:-2.02}} rotation={{x:0,y:1.57,z:0}} onDoorClick={onDoorClick}/>
  </>;
});
