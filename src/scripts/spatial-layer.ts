import * as THREE from 'three';
import { photographs } from '../data/photos';
import type { PlateInteractionDetail } from './photography-interaction';

interface SpatialPlane {
  id: string;
  frameElement: HTMLElement;
  mesh: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  material: THREE.MeshBasicMaterial;
  baseDepth: number;
  currentDepth: number;
  targetDepth: number;
  currentScaleMult: number;
  targetScaleMult: number;
  localPointerX: number;
  localPointerY: number;
  isHovered: boolean;
  isActive: boolean;
  currentY: number;
  targetY: number;
  currentX: number;
  targetX: number;
}

// Curated resting depth offsets (Z-axis) per plate sequence
// Reflects curatorial pacing: weighted asymmetry across the 8 plates
const DEPTH_MAP: Record<string, number> = {
  'plate-01': 0,     // 3:2 Horizontal baseline
  'plate-02': 16,    // 2:3 Vertical column elevated forward
  'plate-03': -14,   // 4:5 Volcanic basalt receding in space
  'plate-04': 22,    // 1:1 Intimate aperture study brought forward
  'plate-05': -20,   // 16:9 Monumental panoramic horizon deep in space
  'plate-06': 0,     // 3:2 Horizontal baseline
  'plate-07': 14,    // 2:3 Desert monolith vertical forward
  'plate-08': -12,   // 4:5 Subterranean vault recess
};

export function initSpatialLayer(): (() => void) | undefined {
  const canvas = document.getElementById('spatial-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  // WebGL support verification
  try {
    const testCanvas = document.createElement('canvas');
    const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
    if (!gl) return;
  } catch {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;

  // Three.js Core Setup
  const scene = new THREE.Scene();
  const fov = 45;
  const cameraZ = 800;
  const camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.set(0, 0, cameraZ);

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
    renderer.setSize(window.innerWidth, window.innerHeight);
  } catch (err) {
    console.warn('WebGL Renderer initialization skipped:', err);
    return;
  }

  // Shared unit PlaneGeometry (scaled per plate) to optimize memory
  const unitGeometry = new THREE.PlaneGeometry(1, 1, 16, 16);
  const textureLoader = new THREE.TextureLoader();

  const spatialPlanes: SpatialPlane[] = [];
  const frameElements = document.querySelectorAll<HTMLElement>('.plate-photo-frame[data-plate-id]');

  let texturesLoadedCount = 0;

  frameElements.forEach((frame) => {
    const plateId = frame.dataset.plateId;
    if (!plateId) return;

    const photoData = photographs.find((p) => p.id === plateId);
    if (!photoData) return;

    // Material with transparent base until texture finishes loading
    const material = new THREE.MeshBasicMaterial({
      transparent: true,
      opacity: 0,
      side: THREE.FrontSide,
    });

    // Texture loading
    textureLoader.load(
      photoData.image.src,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.generateMipmaps = false;

        material.map = texture;
        material.needsUpdate = true;
        material.opacity = 1;

        texturesLoadedCount++;
        // Activate WebGL visual handoff once textures begin rendering
        if (texturesLoadedCount === 1) {
          document.documentElement.classList.add('webgl-active');
        }
      },
      undefined,
      (err) => {
        console.warn(`Texture load fallback for ${plateId}:`, err);
      }
    );

    const mesh = new THREE.Mesh(unitGeometry, material);

    // Apply resting depth offset: simplified on mobile or reduced-motion
    const rawDepth = DEPTH_MAP[plateId] ?? 0;
    const baseDepth = (isMobile || prefersReducedMotion) ? 0 : rawDepth;
    mesh.position.z = baseDepth;

    scene.add(mesh);

    spatialPlanes.push({
      id: plateId,
      frameElement: frame,
      mesh,
      material,
      baseDepth,
      currentDepth: baseDepth,
      targetDepth: baseDepth,
      currentScaleMult: 1.0,
      targetScaleMult: 1.0,
      localPointerX: 0,
      localPointerY: 0,
      isHovered: false,
      isActive: false,
      currentY: 0,
      targetY: 0,
      currentX: 0,
      targetX: 0,
    });
  });

  // Pointer tracking for very subtle ambient rotation (desktop only)
  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  const onPointerMove = (e: MouseEvent) => {
    if (prefersReducedMotion || isMobile) return;
    pointer.targetX = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  if (!isMobile && !prefersReducedMotion) {
    window.addEventListener('mousemove', onPointerMove, { passive: true });
  }

  // Photography Interaction Event Handlers (Synchronized with DOM)
  const onPlateHover = (e: Event) => {
    const customEvent = e as CustomEvent<PlateInteractionDetail>;
    const plate = spatialPlanes.find((p) => p.id === customEvent.detail.plateId);
    if (!plate) return;

    plate.isHovered = true;
    if (!plate.isActive && !isMobile && !prefersReducedMotion) {
      plate.targetDepth = plate.baseDepth + 14;
      plate.targetScaleMult = 1.018;
    }
  };

  const onPlateMove = (e: Event) => {
    const customEvent = e as CustomEvent<PlateInteractionDetail>;
    const plate = spatialPlanes.find((p) => p.id === customEvent.detail.plateId);
    if (!plate) return;

    plate.localPointerX = customEvent.detail.localX ?? 0;
    plate.localPointerY = customEvent.detail.localY ?? 0;
  };

  const onPlateLeave = (e: Event) => {
    const customEvent = e as CustomEvent<PlateInteractionDetail>;
    const plate = spatialPlanes.find((p) => p.id === customEvent.detail.plateId);
    if (!plate) return;

    plate.isHovered = false;
    plate.localPointerX = 0;
    plate.localPointerY = 0;

    if (!plate.isActive) {
      plate.targetDepth = plate.baseDepth;
      plate.targetScaleMult = 1.0;
    }
  };

  const onPlateActivate = (e: Event) => {
    const customEvent = e as CustomEvent<PlateInteractionDetail>;
    const activeId = customEvent.detail.plateId;

    spatialPlanes.forEach((plate) => {
      if (plate.id === activeId) {
        plate.isActive = true;
        if (!prefersReducedMotion) {
          plate.targetDepth = plate.baseDepth + 24;
          plate.targetScaleMult = 1.025;
        }
      } else {
        plate.isActive = false;
        if (!plate.isHovered) {
          plate.targetDepth = plate.baseDepth;
          plate.targetScaleMult = 1.0;
        }
      }
    });
  };

  const onPlateDeactivate = () => {
    spatialPlanes.forEach((plate) => {
      plate.isActive = false;
      if (!plate.isHovered) {
        plate.targetDepth = plate.baseDepth;
        plate.targetScaleMult = 1.0;
      }
    });
  };

  window.addEventListener('plate:hover', onPlateHover);
  window.addEventListener('plate:move', onPlateMove);
  window.addEventListener('plate:leave', onPlateLeave);
  window.addEventListener('plate:activate', onPlateActivate);
  window.addEventListener('plate:deactivate', onPlateDeactivate);

  // Viewport calculation helpers
  function calculateVisibleDimensions(distance: number) {
    const vFovRad = (camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(vFovRad / 2) * distance;
    const width = height * camera.aspect;
    return { width, height };
  }

  // Spatial synchronization loop
  let animationFrameId: number;
  let lastScrollY = window.scrollY;
  let scrollVelocity = 0;

  function render() {
    animationFrameId = requestAnimationFrame(render);

    // Track scroll velocity for subtle inertial tilt
    const currentScrollY = window.scrollY;
    scrollVelocity = currentScrollY - lastScrollY;
    lastScrollY = currentScrollY;

    // Smooth pointer damping
    pointer.x += (pointer.targetX - pointer.x) * 0.05;
    pointer.y += (pointer.targetY - pointer.y) * 0.05;

    // Subtle camera tilt from pointer (max ~0.5 degree)
    if (!prefersReducedMotion && !isMobile) {
      camera.rotation.y = pointer.x * 0.01;
      camera.rotation.x = -pointer.y * 0.008;
    }

    // Synchronize each photo plane to its DOM container
    for (let i = 0; i < spatialPlanes.length; i++) {
      const plane = spatialPlanes[i];
      const rect = plane.frameElement.getBoundingClientRect();

      // Frustum culling check: only calculate and update planes in/near viewport
      const buffer = 400;
      const isNearViewport =
        rect.bottom >= -buffer && rect.top <= window.innerHeight + buffer;

      if (!isNearViewport) {
        plane.mesh.visible = false;
        continue;
      }
      plane.mesh.visible = true;

      // Depth damping
      const depthLerp = prefersReducedMotion ? 1 : 0.12;
      plane.currentDepth += (plane.targetDepth - plane.currentDepth) * depthLerp;
      plane.mesh.position.z = plane.currentDepth;

      // Scale damping
      const scaleLerp = prefersReducedMotion ? 1 : 0.12;
      plane.currentScaleMult += (plane.targetScaleMult - plane.currentScaleMult) * scaleLerp;

      const distance = cameraZ - plane.currentDepth;
      const { width: visWidth, height: visHeight } = calculateVisibleDimensions(distance);

      // Map DOM screen center to Three.js world coordinates
      const screenCenterX = rect.left + rect.width / 2;
      const screenCenterY = rect.top + rect.height / 2;

      plane.targetX = (screenCenterX - window.innerWidth / 2) * (visWidth / window.innerWidth);
      plane.targetY = -(screenCenterY - window.innerHeight / 2) * (visHeight / window.innerHeight);

      // Scale unit plane to match exact DOM frame dimensions * interactive scale
      const targetScaleX = rect.width * (visWidth / window.innerWidth) * plane.currentScaleMult;
      const targetScaleY = rect.height * (visHeight / window.innerHeight) * plane.currentScaleMult;

      // Physical damping on position for weight and inertia
      const lerpPos = prefersReducedMotion ? 1 : 0.15;
      plane.currentX += (plane.targetX - plane.currentX) * lerpPos;
      plane.currentY += (plane.targetY - plane.currentY) * lerpPos;

      plane.mesh.position.x = plane.currentX;
      plane.mesh.position.y = plane.currentY;
      plane.mesh.scale.set(targetScaleX, targetScaleY, 1);

      // Very subtle inertial pitch rotation on scroll + local pointer optical tilt
      if (!prefersReducedMotion && !isMobile) {
        const scrollTilt = THREE.MathUtils.clamp(-scrollVelocity * 0.00025, -0.04, 0.04);
        const localTiltY = plane.isHovered ? plane.localPointerX * 0.022 : 0;
        const localTiltX = plane.isHovered ? -plane.localPointerY * 0.018 : 0;

        const targetRotY = localTiltY + pointer.x * 0.012;
        const targetRotX = localTiltX + scrollTilt;

        plane.mesh.rotation.y = THREE.MathUtils.lerp(plane.mesh.rotation.y, targetRotY, 0.08);
        plane.mesh.rotation.x = THREE.MathUtils.lerp(plane.mesh.rotation.x, targetRotX, 0.08);
      }
    }

    renderer.render(scene, camera);
  }

  // Resize handler
  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  };
  window.addEventListener('resize', onResize, { passive: true });

  // Start render loop
  render();

  // Cleanup handler
  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', onResize);
    window.removeEventListener('mousemove', onPointerMove);
    window.removeEventListener('plate:hover', onPlateHover);
    window.removeEventListener('plate:move', onPlateMove);
    window.removeEventListener('plate:leave', onPlateLeave);
    window.removeEventListener('plate:activate', onPlateActivate);
    window.removeEventListener('plate:deactivate', onPlateDeactivate);
    unitGeometry.dispose();
    spatialPlanes.forEach((p) => {
      p.material.dispose();
      p.material.map?.dispose();
    });
    renderer.dispose();
  };
}
