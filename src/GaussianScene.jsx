import React from "react";
import { Float, Splat } from "@react-three/drei";

const App = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
        <Splat
          scale={1}
          position={[4, 3, 1]}
          rotation={[0, Math.PI / 2, 0]}
          src="https://huggingface.co/cakewalk/splat-data/resolve/main/nike.splat"
        />
    </>
  );
};

export default App;