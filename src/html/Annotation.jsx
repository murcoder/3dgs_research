import { useState } from 'react';
import { Html } from '@react-three/drei';

export function Annotation({children, iconPath, onClick, onHover, cursorStyle = "cursor-pointer", iconStyle, textStyle, ...props}) {
  const [isPointHovered, setIsPointHovered] = useState(false);
  const [isContentHovered, setIsContentHovered] = useState(false);
  let hideTimeout;

  const handlePointEnter = (event) => {
    event.stopPropagation();
    clearTimeout(hideTimeout);
    setIsPointHovered(true);
    if (onHover) {
      onHover();
    }
  };

  // Hide details when pointer leaves point-0, after a small delay
  const handlePointLeave = () => {
    hideTimeout = setTimeout(() => {
      setIsPointHovered(false);
    }, 150);
  };

  // Set hover state for text container only if point-0 was hovered
  const handleContentEnter = (event) => {
    event.stopPropagation();
    if (isPointHovered) {
      clearTimeout(hideTimeout);
      setIsContentHovered(true);
    }
  };

  // Clear both hover states if pointer leaves text
  const handleContentLeave = () => {
    hideTimeout = setTimeout(() => {
      setIsContentHovered(false);
      setIsPointHovered(false);
    }, 150);
  };

  return (
    <Html {...props} distanceFactor={5}>
      <div className="relative">
        <div
          onPointerEnter={handlePointEnter}
          onPointerLeave={handlePointLeave}
          onClick={onClick}
          className={
            'z-20 w-10 h-10 rounded-full bg-black/50 border border-white/80 text-white font-light text-sm flex items-center justify-center ' +
            cursorStyle
          }>
          <img src={iconPath} alt="Open Icon" className={'w-8 h-8 ' + iconStyle} />
        </div>
        {(isPointHovered || isContentHovered) && (
          <div
            onPointerEnter={handleContentEnter}
            onPointerLeave={handleContentLeave}
            className={`z-10 transition-opacity duration-300 ${textStyle}`}>
            {children}
          </div>
        )}
      </div>
    </Html>
  );
}
