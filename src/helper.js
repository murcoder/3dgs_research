import * as THREE from 'three';

/**
 * Calculate the tooltip position in world space based on the pointer position.
 * @param {Object} pointer - Normalized device coordinates (x, y).
 * @param {Object} camera - The THREE.js camera object.
 * @returns {THREE.Vector3} - The calculated world position for the tooltip.
 */
export const calculateTooltipPosition = (pointer, camera) => {
  const pos = new THREE.Vector3();
  const vector = new THREE.Vector3(pointer.x, pointer.y, 0.5); // Z is set to 0.5 for projection

  // Unproject the vector to convert from normalized device coordinates to world coordinates
  vector.unproject(camera);
  vector.sub(camera.position).normalize();

  const distance = -camera.position.z / vector.z;
  pos.copy(camera.position).add(vector.multiplyScalar(distance));

  // Add an offset to position the tooltip slightly above the cursor
  pos.x += 0;
  pos.y += 0;

  return pos;
};
