import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Dimensions state inside ref
    const size = {
      width: container.clientWidth,
      height: container.clientHeight
    };

    // Create Scene
    const scene = new THREE.Scene();
    
    // Create Camera with optimal field of view and depth clipping
    const camera = new THREE.PerspectiveCamera(60, size.width / size.height, 0.1, 100);
    camera.position.z = 30;

    // Create WebGL Renderer with performance enhancements
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(size.width, size.height);
    container.appendChild(renderer.domElement);

    // Dynamic high-fidelity glowing canvas-texture generator (No external SVG file needed)
    const createCircleTexture = (colorStr: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // High-contrast radial glow formulation
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(0.2, colorStr);
        gradient.addColorStop(0.5, `${colorStr}44`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    // Generate specific textures for our premium palette
    const whiteTexture = createCircleTexture('#cbd5e1'); // Dust
    const orangeTexture = createCircleTexture('#f97316'); // Warm Orange
    const purpleTexture = createCircleTexture('#8b5cf6'); // Sci-fi Purple
    const blueTexture = createCircleTexture('#3b82f6'); // Electric Blue

    // Structure defining particle layers to establish parallax depth
    // Three layers: 1 = background dust, 2 = medium interactive particles, 3 = premium foreground orbs
    const layers: {
      count: number;
      size: number;
      colorSelector: () => THREE.Texture;
      parallaxSpeed: number;
      driftSpeed: number;
      opacity: number;
      depthRange: [number, number];
      points?: THREE.Points;
      positions?: Float32Array;
      initialPositions?: Float32Array;
    }[] = [
      {
        count: 550,
        size: 0.12,
        colorSelector: () => whiteTexture,
        parallaxSpeed: 0.2,
        driftSpeed: 0.15,
        opacity: 0.45,
        depthRange: [-40, -10]
      },
      {
        count: 180,
        size: 0.35,
        colorSelector: () => {
          const rand = Math.random();
          if (rand < 0.4) return blueTexture;
          if (rand < 0.7) return purpleTexture;
          return orangeTexture;
        },
        parallaxSpeed: 0.5,
        driftSpeed: 0.35,
        opacity: 0.7,
        depthRange: [-15, 10]
      },
      {
        count: 35,
        size: 1.1,
        colorSelector: () => Math.random() > 0.5 ? orangeTexture : purpleTexture,
        parallaxSpeed: 1.1,
        driftSpeed: 0.6,
        opacity: 0.5,
        depthRange: [10, 25]
      }
    ];

    // Populate positions and instantiate points objects
    layers.forEach((layer) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(layer.count * 3);
      const initialPositions = new Float32Array(layer.count * 3);

      for (let i = 0; i < layer.count; i++) {
        // Distribute nicely along widescreen dimensions
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 45;
        // Depth allocation matching layer spec
        const z = layer.depthRange[0] + Math.random() * (layer.depthRange[1] - layer.depthRange[0]);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;

        initialPositions[i * 3] = x;
        initialPositions[i * 3 + 1] = y;
        initialPositions[i * 3 + 2] = z;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      // Choose a texture
      const tex = layer.colorSelector();

      const material = new THREE.PointsMaterial({
        size: layer.size,
        map: tex,
        transparent: true,
        opacity: layer.opacity,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // Keep reference for update loop
      layer.points = points;
      layer.positions = positions;
      layer.initialPositions = initialPositions;
    });

    // Subtly track mouse targets for parallax interpolation
    const mouse = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Scale from -1 to 1 representing relative offset
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle ResizeObserver as requested by general guidelines
    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (resizeTimeout) clearTimeout(resizeTimeout);
        
        // Debounce to optimize system frame-rates
        resizeTimeout = setTimeout(() => {
          const { width, height } = entry.contentRect;
          size.width = width || 100;
          size.height = height || 100;

          camera.aspect = size.width / size.height;
          camera.updateProjectionMatrix();

          renderer.setSize(size.width, size.height);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }, 150);
      }
    });

    resizeObserver.observe(container);

    // Tab Visibility detection to avoid active GPU cycles when tab is out of focus
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationId: number;

    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // Guard statement
      if (!isTabVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth lerping of mouse target locations (GSAP styles, manual highly performant lerp)
      mouse.x += (mouse.targetX - mouse.x) * 0.045;
      mouse.y += (mouse.targetY - mouse.y) * 0.045;

      // Update camera or rotational parallax
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 1.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Update particle positions in layers
      layers.forEach((layer) => {
        if (!layer.points || !layer.positions || !layer.initialPositions) return;

        const positions = layer.positions;
        const initialPositions = layer.initialPositions;
        const pSpeed = layer.parallaxSpeed;
        const dSpeed = layer.driftSpeed;

        // Subtle parallax displacement
        layer.points.position.x = mouse.x * pSpeed * -3.5;
        layer.points.position.y = mouse.y * pSpeed * -2.5;

        // Subtle system float motion
        for (let i = 0; i < layer.count; i++) {
          const i3 = i * 3;
          // Apply sinusoidal wave relative to coordinates
          const offsetSeed = initialPositions[i3] + initialPositions[i3 + 1];
          positions[i3 + 1] = initialPositions[i3 + 1] + Math.sin(elapsedTime * dSpeed + offsetSeed * 0.08) * 0.35;
          positions[i3] = initialPositions[i3] + Math.cos(elapsedTime * dSpeed * 0.8 + offsetSeed * 0.1) * 0.25;
        }

        // Notify Three.js to reload geometry coords on GPU
        layer.points.geometry.attributes.position.needsUpdate = true;
        // Subtle rotational drift to make it live
        layer.points.rotation.z = elapsedTime * dSpeed * 0.015;
      });

      renderer.render(scene, camera);
    };

    // Kickstart
    animate();

    // Clean up connections on destroy
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      resizeObserver.disconnect();
      if (resizeTimeout) clearTimeout(resizeTimeout);
      
      // Memory cleanup for materials, geometries, and textures to prevent leaks
      layers.forEach((layer) => {
        if (layer.points) {
          scene.remove(layer.points);
          layer.points.geometry.dispose();
          if (Array.isArray(layer.points.material)) {
            layer.points.material.forEach((m) => m.dispose());
          } else {
            layer.points.material.dispose();
          }
        }
      });
      
      whiteTexture.dispose();
      orangeTexture.dispose();
      purpleTexture.dispose();
      blueTexture.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
