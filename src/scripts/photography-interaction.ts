/**
 * Photography Interaction Architecture
 * Atelier Obscura / Kroma Archive
 *
 * Implements tactile, restrained, editorial photography interactions:
 * - Desktop: Hover reticle reveal, optical status badge, subtle pointer tilt
 * - Focus: Visual focus ring, spatial elevation, curatorial runway dimming
 * - Keyboard: Tab focus, Enter/Space activation, Escape dismissal
 * - Mobile: Tap inspection, touch-friendly, native scroll preservation
 * - Progressive Enhancement: Complete DOM functionality if WebGL is unavailable
 */

export interface PlateInteractionDetail {
  plateId: string;
  localX?: number;
  localY?: number;
}

export function initPhotographyInteractions(): (() => void) | undefined {
  if (typeof window === 'undefined') return;

  const frames = document.querySelectorAll<HTMLElement>('.plate-photo-frame[data-plate-id]');
  if (!frames.length) return;

  let activePlateId: string | null = null;
  let hoveredPlateId: string | null = null;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  function setActivePlate(plateId: string | null) {
    if (activePlateId === plateId) {
      // Toggle off if same plate clicked/activated again
      plateId = null;
    }

    const previousId = activePlateId;
    activePlateId = plateId;

    // Reset previous active plate DOM elements
    if (previousId) {
      const prevFrame = document.querySelector<HTMLElement>(`.plate-photo-frame[data-plate-id="${previousId}"]`);
      if (prevFrame) {
        prevFrame.classList.remove('is-active');
        prevFrame.setAttribute('aria-pressed', 'false');
        const badge = prevFrame.querySelector('.plate-status-badge');
        if (badge) badge.textContent = 'INSPECT';
      }
      const prevMoment = document.querySelector<HTMLElement>(`.exhibition-moment[data-plate-id="${previousId}"]`);
      if (prevMoment) {
        prevMoment.classList.remove('is-active-moment');
      }
    }

    // Apply new active plate DOM elements
    if (activePlateId) {
      document.body.classList.add('has-active-plate');
      const activeFrame = document.querySelector<HTMLElement>(`.plate-photo-frame[data-plate-id="${activePlateId}"]`);
      if (activeFrame) {
        activeFrame.classList.add('is-active');
        activeFrame.setAttribute('aria-pressed', 'true');
        const badge = activeFrame.querySelector('.plate-status-badge');
        if (badge) badge.textContent = 'ACTIVE';
      }
      const activeMoment = document.querySelector<HTMLElement>(`.exhibition-moment[data-plate-id="${activePlateId}"]`);
      if (activeMoment) {
        activeMoment.classList.add('is-active-moment');
      }

      window.dispatchEvent(
        new CustomEvent<PlateInteractionDetail>('plate:activate', {
          detail: { plateId: activePlateId },
        })
      );
    } else {
      document.body.classList.remove('has-active-plate');
      window.dispatchEvent(
        new CustomEvent<{}>('plate:deactivate', { detail: {} })
      );
    }
  }

  // Bind per-frame interactions
  frames.forEach((frame) => {
    const plateId = frame.dataset.plateId;
    if (!plateId) return;

    // Pointer Enter (Desktop only)
    const onPointerEnter = () => {
      if (isTouchDevice) return;
      hoveredPlateId = plateId;
      window.dispatchEvent(
        new CustomEvent<PlateInteractionDetail>('plate:hover', {
          detail: { plateId, localX: 0, localY: 0 },
        })
      );
    };

    // Pointer Move (Relative optical tilt)
    const onPointerMove = (e: PointerEvent) => {
      if (isTouchDevice || prefersReducedMotion) return;
      const rect = frame.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const localX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const localY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      window.dispatchEvent(
        new CustomEvent<PlateInteractionDetail>('plate:move', {
          detail: { plateId, localX, localY },
        })
      );
    };

    // Pointer Leave
    const onPointerLeave = () => {
      if (isTouchDevice) return;
      if (hoveredPlateId === plateId) {
        hoveredPlateId = null;
      }
      window.dispatchEvent(
        new CustomEvent<PlateInteractionDetail>('plate:leave', {
          detail: { plateId },
        })
      );
    };

    // Click / Touch Tap
    const onClick = (e: MouseEvent) => {
      e.stopPropagation();
      setActivePlate(plateId);
    };

    // Keyboard Activation (Enter / Space)
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setActivePlate(plateId);
      }
    };

    frame.addEventListener('pointerenter', onPointerEnter);
    frame.addEventListener('pointermove', onPointerMove);
    frame.addEventListener('pointerleave', onPointerLeave);
    frame.addEventListener('click', onClick);
    frame.addEventListener('keydown', onKeyDown);
  });

  // Global dismiss handlers: Escape key and outside click
  const onGlobalKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && activePlateId !== null) {
      setActivePlate(null);
    }
  };

  const onGlobalPointerDown = (e: MouseEvent) => {
    if (activePlateId === null) return;
    const target = e.target as HTMLElement | null;
    if (!target?.closest('.plate-photo-frame')) {
      setActivePlate(null);
    }
  };

  window.addEventListener('keydown', onGlobalKeyDown);
  window.addEventListener('pointerdown', onGlobalPointerDown);

  // Return cleanup function
  return () => {
    window.removeEventListener('keydown', onGlobalKeyDown);
    window.removeEventListener('pointerdown', onGlobalPointerDown);
    document.body.classList.remove('has-active-plate');
  };
}
