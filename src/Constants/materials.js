import * as THREE from 'three';

export const transparentMaterial = new THREE.MeshStandardMaterial({
  color: 'blue',
  opacity: 0,
  transparent: true
});
