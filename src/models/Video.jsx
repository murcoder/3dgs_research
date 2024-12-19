import { useVideoTexture } from "@react-three/drei";
import { useEffect } from 'react';

const Video = ({ src, onLoaded }) => {
  const texture = useVideoTexture(src);
  //const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    const video = document.createElement('video');
    video.src = src;
    video.onloadedmetadata = () => {
      const ratio = video.videoWidth / video.videoHeight;
      //setAspectRatio(ratio);
      onLoaded && onLoaded(ratio); // Pass aspect ratio to parent component
    };
  }, [src, onLoaded]);

  return (
    <meshStandardMaterial  map={texture} toneMapped={false} />
  );
};

export default Video;
