import React, { useRef, useState } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  depth = 12,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({
    x: 50,
    y: 50,
    opacity: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -depth;
    const rotY = ((x - centerX) / centerX) * depth;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={`relative overflow-hidden ${className}`}
      >
        {/* Dynamic 3D Glare Reflection */}
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(56, 189, 248, 0.25) 0%, transparent 60%)`,
            opacity: glarePos.opacity,
          }}
        />
        <div style={{ transform: 'translateZ(20px)' }} className="relative z-0">
          {children}
        </div>
      </div>
    </div>
  );
};
