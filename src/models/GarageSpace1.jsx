import React, { forwardRef } from 'react';
import { Splat } from '@react-three/drei';
import { Door } from '../boundries/Door.jsx';
import { Lasercutter } from '../boundries/Lasercutter.jsx';

export const GarageSpace1 = forwardRef(({ onMachineClick, onDoorClick }, ref) => {

  return <>
    <Splat scale={1} src="./splats/lasercutter_room.splat" />
    <Lasercutter position={{x:-0.04, y:0.9, z:1.88}} boxGeometry={{width:2.8, height:1.52, depth:1.44}} onMachineClick={onMachineClick}/>
    <Door position={{x:-2.4, y:1.54, z:2.86}} onDoorClick={onDoorClick}/>
  </>;
});
