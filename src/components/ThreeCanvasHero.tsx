import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RESUME_DATA } from '../data/portfolioData';
import { Mail, Phone, MapPin, Download, RotateCw, Box } from 'lucide-react';

interface ThreeCanvasHeroProps {
  onOpenResume: () => void;
  onContactClick: () => void;
}

export const ThreeCanvasHero: React.FC<ThreeCanvasHeroProps> = ({
  onOpenResume,
  onContactClick,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [showGrid, setShowGrid] = useState(true);

  // References for dynamic Three.js updates
  const sceneStateRef = useRef<{
    cardGroup?: THREE.Group;
    floatingObjects?: { mesh: THREE.Mesh; baseScale: number; speedX: number; speedY: number; floatOffset: number }[];
    gridMesh?: THREE.GridHelper;
    cardSpinAngle?: number;
    targetSpinAngle?: number;
    mouse3D?: THREE.Vector2;
    raycaster?: THREE.Raycaster;
    camera?: THREE.PerspectiveCamera;
  }>({});

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070a12, 0.035);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 4.6);

    // 3. High Performance Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 4. Stable, Uniform Studio Lighting (NO moving light on face)
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.4);
    mainLight.position.set(1.5, 2.5, 4.5);
    scene.add(mainLight);

    const softFill = new THREE.DirectionalLight(0x93c5fd, 0.6);
    softFill.position.set(-2.5, -1, 3);
    scene.add(softFill);

    // 5. 3D Card Group with User's Photo
    const cardGroup = new THREE.Group();
    scene.add(cardGroup);

    const cardW = 2.0;
    const cardH = 2.7;
    const cardD = 0.05;
    const cardGeo = new THREE.BoxGeometry(cardW, cardH, cardD);

    // Load User's Exact Photo
    const textureLoader = new THREE.TextureLoader();
    const userTexture = textureLoader.load(RESUME_DATA.image, () => {
      userTexture.colorSpace = THREE.SRGBColorSpace;
      renderer.render(scene, camera);
    });

    const frontMat = new THREE.MeshStandardMaterial({
      map: userTexture,
      roughness: 0.35,
      metalness: 0.02,
    });

    const frameMat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      roughness: 0.4,
      metalness: 0.6,
    });

    const cardMesh = new THREE.Mesh(cardGeo, [
      frameMat,
      frameMat,
      frameMat,
      frameMat,
      frontMat, // Front Face (+Z)
      frameMat, // Back Face (-Z)
    ]);
    cardGroup.add(cardMesh);

    // Glowing Hairline Wireframe Border around Card
    const cardEdges = new THREE.EdgesGeometry(cardGeo);
    const cardWireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.5,
    });
    const cardWire = new THREE.LineSegments(cardEdges, cardWireMat);
    cardGroup.add(cardWire);

    // 6. Interactive 3D Floating Geometric Elements
    const floatingObjects: {
      mesh: THREE.Mesh;
      baseScale: number;
      speedX: number;
      speedY: number;
      floatOffset: number;
    }[] = [];

    // Element 1: Sleek Torus Ring
    const torusGeo = new THREE.TorusGeometry(0.35, 0.07, 16, 40);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x0891b2,
      emissiveIntensity: 0.25,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(-1.6, 1.1, -0.4);
    scene.add(torusMesh);
    floatingObjects.push({ mesh: torusMesh, baseScale: 1.0, speedX: 0.8, speedY: 1.2, floatOffset: 0 });

    // Element 2: Luminescent Icosahedron (Gem Crystal)
    const icoGeo = new THREE.IcosahedronGeometry(0.3, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.7,
      roughness: 0.25,
      emissive: 0x0284c7,
      emissiveIntensity: 0.3,
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(1.6, 1.0, -0.3);
    const icoEdges = new THREE.EdgesGeometry(icoGeo);
    const icoWire = new THREE.LineSegments(icoEdges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }));
    icoMesh.add(icoWire);
    scene.add(icoMesh);
    floatingObjects.push({ mesh: icoMesh, baseScale: 1.0, speedX: 1.1, speedY: 0.9, floatOffset: Math.PI / 2 });

    // Element 3: Octahedron (Diamond)
    const octaGeo = new THREE.OctahedronGeometry(0.28, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x4f46e5,
      emissiveIntensity: 0.2,
    });
    const octaMesh = new THREE.Mesh(octaGeo, octaMat);
    octaMesh.position.set(-1.5, -1.1, -0.2);
    const octaEdges = new THREE.EdgesGeometry(octaGeo);
    const octaWire = new THREE.LineSegments(octaEdges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }));
    octaMesh.add(octaWire);
    scene.add(octaMesh);
    floatingObjects.push({ mesh: octaMesh, baseScale: 1.0, speedX: 0.7, speedY: 1.4, floatOffset: Math.PI });

    // Element 4: Dodecahedron
    const dodecaGeo = new THREE.DodecahedronGeometry(0.26, 0);
    const dodecaMat = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      metalness: 0.75,
      roughness: 0.3,
      emissive: 0x0f766e,
      emissiveIntensity: 0.25,
    });
    const dodecaMesh = new THREE.Mesh(dodecaGeo, dodecaMat);
    dodecaMesh.position.set(1.55, -1.0, -0.4);
    const dodecaEdges = new THREE.EdgesGeometry(dodecaGeo);
    const dodecaWire = new THREE.LineSegments(dodecaEdges, new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 }));
    dodecaMesh.add(dodecaWire);
    scene.add(dodecaMesh);
    floatingObjects.push({ mesh: dodecaMesh, baseScale: 1.0, speedX: 0.9, speedY: 0.8, floatOffset: (Math.PI * 3) / 2 });

    // 7. Depth Floor Grid
    const gridHelper = new THREE.GridHelper(16, 24, 0x0ea5e9, 0x1e293b);
    gridHelper.position.y = -1.9;
    const gMat = gridHelper.material as THREE.Material;
    gMat.transparent = true;
    gMat.opacity = 0.3;
    scene.add(gridHelper);

    // 8. 3D Particle Starfield
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 8.5;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 7.5;
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 5.0;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.035,
      transparent: true,
      opacity: 0.4,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 9. Interactive State Refs
    const mouse = new THREE.Vector2(-999, -999);
    const raycaster = new THREE.Raycaster();

    sceneStateRef.current = {
      cardGroup,
      floatingObjects,
      gridMesh: gridHelper,
      cardSpinAngle: 0,
      targetSpinAngle: 0,
      mouse3D: mouse,
      raycaster,
      camera,
    };

    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = x;
      mouse.y = y;

      // Gentle, natural 3D tilt without shifting light on face
      targetRotY = x * 0.28;
      targetRotX = -y * 0.18;
    };

    const handleClick = () => {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects([cardMesh, ...floatingObjects.map((o) => o.mesh)], true);

      if (intersects.length > 0) {
        if (sceneStateRef.current) {
          sceneStateRef.current.targetSpinAngle = (sceneStateRef.current.targetSpinAngle || 0) + Math.PI * 2;
        }
      }
    };

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();
      const state = sceneStateRef.current;

      // Smooth card orientation
      if (cardGroup && state) {
        state.cardSpinAngle = THREE.MathUtils.lerp(
          state.cardSpinAngle || 0,
          state.targetSpinAngle || 0,
          0.08
        );

        cardGroup.rotation.y = THREE.MathUtils.lerp(
          cardGroup.rotation.y,
          targetRotY + (state.cardSpinAngle || 0),
          0.07
        );
        cardGroup.rotation.x = THREE.MathUtils.lerp(
          cardGroup.rotation.x,
          targetRotX + Math.sin(elapsed * 1.2) * 0.02,
          0.07
        );
        cardGroup.position.y = Math.sin(elapsed * 1.0) * 0.035;
      }

      // Rotate floating 3D geometry nodes
      floatingObjects.forEach((item) => {
        item.mesh.rotation.x += delta * item.speedX;
        item.mesh.rotation.y += delta * item.speedY;
        item.mesh.position.y += Math.sin(elapsed * 1.5 + item.floatOffset) * 0.0015;
      });

      // Hover feedback on orbital shapes
      raycaster.setFromCamera(mouse, camera);
      const hoverHits = raycaster.intersectObjects(floatingObjects.map((o) => o.mesh), true);

      floatingObjects.forEach((item) => {
        const isHovered = hoverHits.some((h) => h.object === item.mesh || item.mesh.children.includes(h.object as any));
        const targetScale = isHovered ? 1.3 : 1.0;
        item.mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      });

      // Grid drift
      gridHelper.position.z = (elapsed * 0.3) % 1;

      // Particles rotation
      particles.rotation.y = elapsed * 0.012;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);

      renderer.dispose();
      cardGeo.dispose();
      frontMat.dispose();
      frameMat.dispose();
      cardEdges.dispose();
      cardWireMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      dodecaGeo.dispose();
      dodecaMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  const handleSpinCard = () => {
    if (sceneStateRef.current) {
      sceneStateRef.current.targetSpinAngle = (sceneStateRef.current.targetSpinAngle || 0) + Math.PI * 2;
    }
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
    if (sceneStateRef.current?.gridMesh) {
      sceneStateRef.current.gridMesh.visible = !showGrid;
    }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center justify-center py-16 px-6 md:px-12 bg-gradient-to-b from-[#090d16] via-[#0b101c] to-[#070a12] overflow-hidden">
      {/* Background Lighting Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Clear, Professional Introduction */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>BSCS 4th Semester · Riphah International University</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {RESUME_DATA.name}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-cyan-400 mt-2">
              {RESUME_DATA.title}
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Computer Science undergraduate at Riphah International University, Islamabad. Basic knowledge in Web & Frontend Development (HTML, CSS, JS, React) and Mobile App Development (Flutter), alongside UI/UX design in Figma, Firebase, SQL basics, C/C++, Java OOP, Linux (Kali, Ubuntu), and expert in Microsoft Office.
          </p>

          {/* Quick Contact & Details Strip */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              {RESUME_DATA.contact.location}
            </span>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={`tel:${RESUME_DATA.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {RESUME_DATA.contact.phone}
            </a>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              {RESUME_DATA.contact.email}
            </a>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm rounded-lg transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 rounded-lg transition-colors"
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column: 3D Interactive Spatial Showcase */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-[370px] aspect-[3/4] rounded-2xl p-2 bg-gradient-to-b from-slate-800/60 to-slate-900/60 border border-slate-700/60 shadow-2xl backdrop-blur-sm group">
            {/* 3D WebGL Canvas */}
            <div
              ref={mountRef}
              className="w-full h-full rounded-xl overflow-hidden cursor-pointer"
              title="Click or move mouse to interact with 3D elements"
            />
          </div>

          {/* 3D Interactive Controls */}
          <div className="mt-3 flex items-center gap-2 text-xs">
            <button
              onClick={handleSpinCard}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              title="Click to spin 3D card 360 degrees"
            >
              <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>360° Spin Card</span>
            </button>
            <button
              onClick={toggleGrid}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              <Box className="w-3.5 h-3.5 text-cyan-400" />
              <span>{showGrid ? 'Hide 3D Grid' : 'Show 3D Grid'}</span>
            </button>
          </div>

          <div className="text-[11px] font-mono text-slate-500 mt-2">
            Move mouse to gently tilt in 3D
          </div>
        </div>
      </div>
    </section>
  );
};
